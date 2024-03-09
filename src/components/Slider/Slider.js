import React from "react";
import Slider from "react-slick";

import styles from './Slider.module.css';

const SimpleSlider = (props) => {
  const { slidesImgs, isMobile } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1
  };

  const slides = slidesImgs.map(({ imgPath, imgAlt }, index) => (
    <div className={styles.Slide}  key={index}>
      <img src={imgPath} alt={imgAlt} />
    </div>
  ));

  return (
    <div className={styles.Slider}>
      <Slider {...settings}>
        {slides}
      </Slider>
    </div>
  );
}

export default SimpleSlider;