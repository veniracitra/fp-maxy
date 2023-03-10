import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./style.css";

import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
const Best = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    2160: { items: 4 },
    4432: { items: 5 },
  };
  const items = [
    <img src={s1} alt="carousel pict" className="item" />,
    <img src={s2} alt="carousel pict" className="item" />,
    <img src={s3} alt="carousel pict" className="item" />,
    <img src={s2} alt="carousel pict" className="item" />,
    <img src={s3} alt="carousel pict" className="item" />,
  ];
  return (
    <section id="our-service" className="our-service mt-4">
      <div className="desc-slides my-5">
        <h1>Best Seller</h1>
      </div>
      <AliceCarousel
        items={items}
        responsive={responsive}
        dotsDisabled={true}
      />
    </section>
  );
};

export default Best;
