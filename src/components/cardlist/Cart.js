import React from "react";

import "./style.css";
const Cart = (props) => {
  const data = props.data;
  const title = props.name;

  return (
    <section className="cartlist">
      <h1>{title}</h1>
      <div className="row my-5 text-center container">
        {Object.values(data).map((item) => (
          <div className="col-lg-4 col-sm-12 ">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.img} alt="item 1 pict" />
              <div className="card-body own-cart-tagline">
                <h1>{item.title}</h1>
                <p>
                  <span>{item.discount}</span>
                  <small className="rp-promo">Rp{item.strikeDiscount}</small>
                </p>
                <p className="rp">Rp {item.price}</p>
                <p className="terjual">{item.sold} Terjual</p>
                <a href="/products/haircare" className="btn">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
