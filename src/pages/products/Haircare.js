import React from "react";

import CartList from "../../components/cardlist/Cart";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/ownNav";
const Haircare = () => {
  const haircareData = [
    {
      title: "Hydrokeratin Curl Serum [150ml]",
      img: "/assets/h1.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Essence Mist [95ml]",
      img: "/assets/h2.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Leave-in Angeling Cream [150ml]",
      img: "/assets/h3.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Repair Ampoule [100ml]",
      img: "/assets/h4.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Root Volume Fixer [95ml] Hair Spray",
      img: "/assets/h5.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Self-Up Volume Shampoo [500ml]",
      img: "/assets/h6.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Self-Up Volume Treatment [230ml]",
      img: "/assets/h7.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Rebak Style Repair Shampoo [400ml]",
      img: "/assets/h8.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Rebak Style Repair Treatment [230ml]",
      img: "/assets/h9.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Self-Up Volume Shampoo [500ml]",
      img: "/assets/h10.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Root Volume Fixer [95ml] Hair Spray",
      img: "/assets/h11.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Repair Ampoule [100ml]",
      img: "/assets/h12.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
  ];
  return (
    <>
      <div className="container">
        <Navbar />
        <Menu />
        <CartList data={haircareData} name={"HAIRCARE"} />
      </div>
      <Footer />
    </>
  );
};

export default Haircare;
