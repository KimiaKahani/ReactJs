import React, { useEffect } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { loginUserAction } from "./redux/userReducer";
import { STORAGE_AUTH_KEY } from "./libs/constants";
import axios from "axios";
import Modal from "./components/modal";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const auth_key = localStorage.getItem(STORAGE_AUTH_KEY);
    if (auth_key) {
      dispatch(loginUserAction(auth_key));
      toast("welcome back", {
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
      ] = `Bearer ${auth_key.access_token}`;
    }
  }, []);

  return (
    <>
      <Modal />
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
