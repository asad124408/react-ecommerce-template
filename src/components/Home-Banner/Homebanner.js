import React, { useEffect, useState } from "react";
import styles from "./Homebanner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    id: "1",
    src: "assets/img/hero-banner/1.jpg",
    title: "First Slider #1",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "2",
    src: "assets/img/hero-banner/2.jpg",
    title: "Second Title #2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "3",
    src: "assets/img/hero-banner/3.jpg",
    title: "Third Slider #3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "4",
    src: "assets/img/hero-banner/4.jpg",
    title: "Fourth Slider #4",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
function Homebanner() {
  const [data, setData] = useState(items);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.homebanner}>
      <div className="container">
        <Slider {...settings}>
          {data &&
            data.length > 0 &&
            data.map((n, i) => (
              <div className={styles.sliderContainer}>
                <div className={styles.sliderWrapper}>
                  <img src={n.src} alt={n.title} />
                  <h3>{n.title}</h3>
                  <p>{n.description}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Homebanner;
