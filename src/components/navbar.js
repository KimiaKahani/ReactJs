import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../libs/constants";
import { useSelector } from "react-redux";
import Button from "./button";
import { baniLogo } from "../libs/images";
import { IonIcon } from "@ionic/react";
import { searchOutline, cartOutline } from "ionicons/icons";
import Input from "./input";

function Navbar() {
  const userData = useSelector((data) => data.user);
  const cardData = useSelector((data) => data.card);

  return (
    <header>
      <div className="navigationGeneral">
        <div className="flex items-center">
          <Button
            className="cartButton"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <div className="badge">
              {Object.keys(cardData?.cardList || {}).length}
            </div>
            <IonIcon className="cartIcon" icon={cartOutline}></IonIcon>
          </Button>
          {userData.isLogin ? (
            <Button
              className="loginButton"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              خروج از حساب کاربری
            </Button>
          ) : (
            <Link to={"login"} className="loginButton">
              ورود / ثبت نام
            </Link>
          )}
        </div>
        <div className="searchBox">
          <form>
            <IonIcon className="searchIcon" icon={searchOutline}></IonIcon>
            <Input
              type="text"
              className="searchInput"
              placeholder="جستجو در میان بیش از ۷۰۰ برند معتبر"
              autocomplete="off"
            />
          </form>
        </div>
        <div className="banilogo">
          <Link to={"/"}>
            <img src={baniLogo} alt="banilogo" />
          </Link>
        </div>
      </div>
      <div className="navMenu">
        <div>
          {navLinks.map((item) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "navActive px-4" : "text-black px-4"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
