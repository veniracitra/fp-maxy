import React from "react";
import Navbar from "../../components/navbar/ownNav";
import Footer from "../../components/footer/Footer";

// Images
import dtl1 from "../../assets/dtl1.png";
import dtl2 from "../../assets/dtl2.png";
import dtl3 from "../../assets/dtl3.png";
import dtl4 from "../../assets/dtl4.png";
import stars from "../../assets/star.png";
import wCart from "../../assets/pink-cart.png";

import "./style.css";
const Detailproduct = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <section className="detail-product my-5">
          <div className="row">
            <div className="col-lg-6">
              <img src={dtl1} alt="Detail 1 pict" />
              <div className="row my-3">
                <div className="col-lg-4">
                  <img src={dtl2} alt="Detail 1 pict" />
                </div>
                <div className="col-lg-4">
                  <img src={dtl3} alt="Detail 1 pict" />
                </div>
                <div className="col-lg-4">
                  <img src={dtl4} alt="Detail 1 pict" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 kanan">
              <div className="detail-product-tagline">
                <h1>Hydrokeratin Curl Serum</h1>
                <p>
                  4,9 <img src={stars} alt="" />| 80 Penilaian | Terjual 100
                </p>
                <div className="row">
                  <div className="col-lg-2">
                    <p className="discount">6%</p>
                  </div>
                  <div className="col-lg-10">
                    <p className="stroke">Rp459.200</p>
                  </div>
                </div>
                <h1>Rp 431.648</h1>
                <hr />
                <div className="product-desc">
                  <h1>Spesifikasi Produk</h1>
                  <p>
                    JENNYHOUSE OFFICIAL - Hydrokeratin Repair Ampoule 50 Ml
                    Miliki rambut seperti Son Ye Jin dengan 7 rangkaian Self Up
                    haircare! Hydrokeratin Repair Ampoule merupakan nutrisi
                    terbaik untuk memperbaiki kerusakan rambut. Dapat digunakan
                    secara langsung atau dicampurkan dengan rangkaian produk
                    Self Up lainnya. Produk ini terbuat dari bahan-bahan alami
                    bebas dari 12 bahan berbahaya dan diformulasikan khusus
                    untuk masalah kerontokan, rambut kering rusak bercabang
                    akibat pewarnaan dan styling.
                  </p>
                  <div className="row my-4">
                    <div className="col-lg-8">
                      <button>
                        Masukkan keranjang <img src={wCart} alt="White Cart" />
                      </button>
                    </div>
                    <div className="col-lg-4">
                      <button>Beli Sekarang</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Detailproduct;
