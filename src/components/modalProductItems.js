import React from "react";
import Button from "./button";
import { useDispatch } from "react-redux";
import { addToCardAction, decreaseCardItemAction } from "../redux/cardReducer";

export default function ModalProductItems({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card card-side bg-white text-black shadow-xl my-6">
        <figure>
          <img
            src={item?.images?.[0]}
            alt="Movie"
            className="w-24 mx-4 border-2	border-black	"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{item.title}</h2>
          <p>قیمت: {item.price}$</p>
          <div className="card-actions justify-end">
            تعداد:
            <Button
              onClick={() => {
                dispatch(addToCardAction(item));
              }}
              className="w-[20px]"
            >
              +
            </Button>
            <span className="font-bold">{item.count}</span>
            <Button
              onClick={() => {
                dispatch(decreaseCardItemAction(item));
              }}
              className="w-[20px]"
            >
              -
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
