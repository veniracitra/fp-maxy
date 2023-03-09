import React from "react";

import Navbar from "../../components/navbar/ownNav";
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
          <div className="col-lg-6 bs3">bg-3</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
