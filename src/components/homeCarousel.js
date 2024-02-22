import "./homeCarousel.css";

function HomeCarousel({ image, id }) {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={image} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${
            id === 0 || id === 4 || id === 8 || id === 12 ? id + 2 : id - 1
          }`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${
            id - 2 === 0 || id - 2 === 4 || id - 2 === 8 || id - 2 === 12
              ? id - 2
              : id + 1
          }`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
}

export default HomeCarousel;
