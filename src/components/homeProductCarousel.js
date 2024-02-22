import React from "react";
import ProductItem from "./productItem";
import Carousel from "./carousel";

export default function HomeProductCarousel({ data }) {
  return (
    <div className="">
      <Carousel>
        {data?.data.map((item) => {
          return (
            <div className="carousel-item carousel-center max-w-md px-2 w-[22%] productCarousel">
              {" "}
              <ProductItem item={item} />;
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
