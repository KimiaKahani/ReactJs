import React, { useEffect } from "react";
import "./home.css";
import HomeCarousel from "../components/homeCarousel";
import useAsync from "../hooks/useAsync";
import HomeProductCarousel from "../components/homeProductCarousel";
import {
  carousel1Pics,
  carousel2Pics,
  carousel3Pics,
  carousel4Pics,
} from "../libs/images";
import Carousel from "../components/carousel";

export default function Home() {
  const { run, data, loading } = useAsync("products?offset=0&limit=8");

  useEffect(() => {
    run();
  }, []);

  return (
    <div className="homePage">
      <div className="flex justify-between">
        <Carousel style={{ width: "68%", borderRadius: "16px" }}>
          {carousel1Pics.map((image, index) => (
            <HomeCarousel image={image} id={index} />
          ))}
        </Carousel>
        <Carousel style={{ width: "30%", borderRadius: "16px" }}>
          {carousel2Pics.map((image, index) => (
            <HomeCarousel image={image} id={index + 4} />
          ))}
        </Carousel>
      </div>
      <div className="flex justify-between mt-10">
        <Carousel style={{ width: "30%", borderRadius: "16px" }}>
          {carousel4Pics.map((image, index) => (
            <HomeCarousel image={image} id={index + 8} />
          ))}
        </Carousel>
        <Carousel style={{ width: "68%", borderRadius: "16px" }}>
          {carousel3Pics.map((image, index) => (
            <HomeCarousel image={image} id={index + 12} />
          ))}
        </Carousel>
      </div>

      <section className="my-12">
        <h2>پرفروش ترین محصولات</h2>
        <HomeProductCarousel data={data} />
      </section>
    </div>
  );
}
