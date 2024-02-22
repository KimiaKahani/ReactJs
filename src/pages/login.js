import "./login.css";
import { useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import useAsync from "../hooks/useAsync";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/userReducer";
import { STORAGE_AUTH_KEY } from "../libs/constants";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";

function Login() {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPass = () => setShowPassword(!showPassword);

  const [loginFormData, setLoginFormData] = useState({
    email: "john@mail.com",
    password: "changeme",
  });
  const userData = useSelector((data) => data.user);
  const dispatch = useDispatch();
  const { run, data, loading } = useAsync("auth/login", "POST");

  useEffect(() => {
    if (userData.isLogin) {
    }
  }, [userData]);

  const handleLoginSetData = (e, type) => {
    setLoginFormData({ ...loginFormData, [type]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    run(loginFormData).then((data) => {
      toast("successfull login", {
        type: "success",
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data?.data?.access_token}`;
      localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(data?.data));
      console.log(data.data);

      dispatch(loginUserAction(data?.data));
    });
  };

  return (
    <div className="loginPage w-[50%] mx-auto mt-6">
      <div className="w-full flex justify-center">
        <Button
          className={`${
            tab === "login" && "isActive"
          } border-b-2 border-l-2 py-2 px-8`}
          onClick={() => setTab("login")}
        >
          ورود
        </Button>
        <Button
          className={`${tab === "register" && "isActive"} border-b-2 py-2 px-6`}
          onClick={() => setTab("register")}
        >
          ثبت نام
        </Button>
      </div>
      {tab === "login" && (
        <form
          className="mt-4 flex justify-center flex-col items-center"
          onSubmit={handleLogin}
        >
          <div className="text-right">
            <h1 className="my-2 mt-4">خوش آمدید</h1>
          </div>
          <Input
            placeholder="yourEmail@gmail.com"
            className={"my-2 text-center"}
            type="text"
            onChange={(e) => {
              handleLoginSetData(e, "email");
            }}
          />
          <div className="passInput flex justify-between">
            <Input
              type={showPassword ? "text" : "password"}
              className={"my-2 text-center"}
              onChange={(e) => {
                handleLoginSetData(e, "pass");
              }}
            />
            <Button
              className="font-bold text-xl"
              type="button"
              onClick={handleShowPass}
            >
              {showPassword ? (
                <IonIcon icon={eyeOutline}></IonIcon>
              ) : (
                <IonIcon icon={eyeOffOutline}></IonIcon>
              )}
            </Button>
          </div>
          <Button className="submitButton" type="submit">
            ورود
          </Button>
        </form>
      )}
    </div>
  );
}

export default Login;
