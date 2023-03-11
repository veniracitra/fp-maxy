import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/ownNav";
import Banner from "../../components/banner/Banner";
import Bestseller from "../../components/bestseller/Best";
import Charming from "../../components/charming/Charming";
import Footer from "../../components/footer/Footer";
const Dashboard = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    decoder();
  });

  const decoder = () => {
    try {
      if (!accessToken) {
        navigate("/404");
      }
    } catch (error) {
      console.log(error);
    }
  };
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

export default Dashboard;
