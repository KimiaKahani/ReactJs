import React from "react";
import "./productItem.css";
import Button from "./button";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ item }) {
  const navigate = useNavigate();
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={item.images[0]} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>قیمت:{item.price}$</p>
        <div className="card-actions justify-end">
          <Button
            className="btn btn-primary"
            onClick={() => {
              navigate(`/products/${item.id}`);
            }}
          >
            خرید محصول
          </Button>
        </div>
      </div>
    </div>
  );
}
