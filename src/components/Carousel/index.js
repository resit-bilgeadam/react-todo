import { useState } from "react";
import s from "./Carousel.module.scss";

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
    <div className={s.carousel}>
      <img className={s.carouselImg} src={selectedImg} />

      <div className={s.prevWrapper}>
        <button className={s.prevBtn} onClick={prevSlide}>
          PREV
        </button>
      </div>

      <div className={s.nextWrapper}>
        <button className={s.nextBtn} onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Carousel;
