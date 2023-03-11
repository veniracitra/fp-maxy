import React from "react";
import CartList from "../../components/cardlist/Cart";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/ownNav";
const Haircolor = () => {
  const haircolorData = [
    {
      title: "Hydrokeratin Curl Serum [150ml]",
      img: "/assets/c1.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Essence Mist [95ml]",
      img: "/assets/c2.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Leave-in Angeling Cream [150ml]",
      img: "/assets/c3.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Repair Ampoule [100ml]",
      img: "/assets/c4.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Root Volume Fixer [95ml] Hair Spray",
      img: "/assets/c5.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Self-Up Volume Shampoo [500ml]",
      img: "/assets/c6.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Self-Up Volume Treatment [230ml]",
      img: "/assets/c7.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Rebak Style Repair Shampoo [400ml]",
      img: "/assets/c8.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Rebak Style Repair Treatment [230ml]",
      img: "/assets/c9.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Self-Up Volume Shampoo [500ml]",
      img: "/assets/c10.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Root Volume Fixer [95ml] Hair Spray",
      img: "/assets/c11.png",
      strikeDiscount: "459.200",
      discount: "6%",
      price: "431.648",
      sold: 100,
    },
    {
      title: "Hydrokeratin Repair Ampoule [100ml]",
      img: "/assets/c12.png",
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
        <CartList data={haircolorData} name={"HAIR COLOR"} />
      </div>
      <Footer />
    </>
  );
};

export default Haircolor;
