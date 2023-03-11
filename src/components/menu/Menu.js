import React from "react";

import fIcon from "../../assets/filter.png";

import "./style.css";
const Menu = () => {
  return (
    <section className="own-menu my-5 container">
      <div className="row text-center">
        <div className="col-lg-3">
          <p>Terkait</p>
        </div>
        <div className="col-lg-3">
          <p>Terbaru</p>
        </div>
        <div className="col-lg-3">
          <p>Terlaris</p>
        </div>
        <div className="col-lg-3">
          <img src={fIcon} alt="filter icon" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
