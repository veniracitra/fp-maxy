import React from "react";

import Navbar from "../../components/navbar/ownNav";
import Banner from "../../components/banner/Banner";
import Bestseller from "../../components/bestseller/Best";
import Charming from "../../components/charming/Charming";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Banner />
        <Bestseller />
        <Charming />
      </div>
      <Footer />
    </>
  );
};

export default Home;
