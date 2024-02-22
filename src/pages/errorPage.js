import React from "react";
import "./errorPage.css";
import { errorPagePic } from "../libs/images";
import Button from "../components/button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="errorPage">
      <img src={errorPagePic} />
      <br />
      <h3>صفحه ی مورد نظر یافت نشد</h3>
      <Button>
        <Link to="/">بازگشت به خانه</Link>
      </Button>
    </div>
  );
}
