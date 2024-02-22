import React, { useEffect } from "react";
import HomeCarousel from "../components/homeCarousel";
import useAsync from "../hooks/useAsync";
import HomeProductCarousel from "../components/homeProductCarousel";
import { useParams } from "react-router-dom";
import ProductItem from "../components/productItem";
import { useDispatch } from "react-redux";
import { addToCardAction } from "../redux/cardReducer";

export default function ProductDetail() {
  const { id } = useParams();
  const { run, data, loading } = useAsync(`products/${id}`);
  const dispatch = useDispatch();

  useEffect(() => {
    run();
  }, []);
  if (loading) return <>is loading</>;
  const { title, images, price, description } = data?.data;
  return (
    <div>
      <div className="card lg:card-side m-12 flex justify-between text-left">
        <figure>
          <img src={images?.[0]} alt="Album" className="w-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <span>{price} $</span>{" "}
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(addToCardAction(data?.data));
              }}
            >
              buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
