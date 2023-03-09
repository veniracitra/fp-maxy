import React from "react";

import Navbar from "../../components/navbar/ownNav";
import bs3 from "../../assets/bestseller-3.png";
import "./style.css";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="banner my-4">
        <div className="row bs1">
          <div className="banner-tagline">
            <p>Jenny House</p>
            <h1>Steal The Spotlight</h1>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="discover-tagline">
              <p>You were meant to be where the spotlight shines</p>
              <button>Discover it</button>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img src={bs3} alt="bs - 3" className="bs3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
