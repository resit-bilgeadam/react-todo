import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [imgIndex, setImgIndex] = useState(0);
  const selectedImg = images[imgIndex % images.length];

  const nextSlide = () => {
    setImgIndex(imgIndex + 1);
  };

  const prevSlide = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
      return;
    }

    setImgIndex(images.length - 1);
  };

  return (
    <div className="carousel">
      <img className="carousel-img" src={selectedImg} />

      <div className="prev-wrapper">
        <button className="prev-btn" onClick={prevSlide}>
          PREV
        </button>
      </div>

      <div className="next-wrapper">
        <button className="next-btn" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Carousel;
