import React from "react";

export default function Carousel({ style, children }) {
  return (
    <div className="carousel" style={style}>
      {children}
    </div>
  );
}
