import React from "react";

import c1 from "../../assets/charming1.png";
import c2 from "../../assets/charming2.png";
import c3 from "../../assets/charming3.png";
import "./style.css";
const charming = () => {
  return (
    <section className="charming">
      <h1>Products that make you charming</h1>
      <div className="row my-4">
        <div className="col-lg-6">
          <div className="charming-card text-center">
            <img src={c1} alt="c1 pict" />
            <h1>HAIRCARE</h1>
            <p>
              Formulated from 20 years experience of Jennyhouse salon in Korea
              with natural ingredients
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="charming-card text-center">
            <img src={c2} alt="c1 pict" />
            <h1>Cosmetics</h1>
            <p>
              Formulated from 20 years experience of Jennyhouse salon in Korea
              with natural ingredients
            </p>
          </div>
        </div>
        <div className="col-lg-12 my-3">
          <div className="charming-card text-center">
            <img src={c3} alt="c1 pict" />
            <h1>Cosmetics</h1>
            <p>
              Formulated from 20 years experience of Jennyhouse salon in Korea
              with natural ingredients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default charming;
