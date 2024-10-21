import React, { useState, useEffect } from "react";
const imgArr = [
  "https://images.unsplash.com/photo-1720247521700-3bda3ce35077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ,
  "https://images.unsplash.com/photo-1720292770211-442f7eb56ec8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ,
  "https://plus.unsplash.com/premium_photo-1718503746361-62c5e105ff32?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setCurrentIndex((prev) => prev + (1 % imgArr.length));
    }, 1000);
    return () => clearInterval(timer);
  },[imgArr.length]);
  return (
    <div>
      <img
        src={imgArr[currentIndex]}
        style={{ height: "450px", width: "400px" }}
        alt=""
      />
    </div>
  );
};

export default ImageSlider;
