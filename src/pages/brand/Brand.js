import React from "react";

import Navbar from "../../components/navbar/ownNav";
import Footer from "../../components/footer/Footer";

import bn1 from "../../assets/brand1.png";
import bn2 from "../../assets/brand2.png";
import ach1 from "../../assets/ach1.png";
import ach2 from "../../assets/ach2.png";
import ach3 from "../../assets/ach3.png";
import ach4 from "../../assets/ach4.png";
import wd1 from "../../assets/sonhyejin.png";
import wd2 from "../../assets/parkshinhye.png";

import { Col, Row, Container } from "react-bootstrap";

import "./style.css";
const Brand = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Container>
          <div className="container-fluid">
            <Row>
              <Col>
                <img fluid src={bn1} alt="bn1" className="img-brand1" />
              </Col>
            </Row>
            <div className="profile">
              <Row>
                <Col>
                  <div className="brand-description">
                    <h2>Beauty Salon</h2>
                    <p>
                      Located in Cheongdam-dong, Beauty Salon "Jenny House"
                      operates two branches of Cheongdam Hill and Primo
                      directly. For the past 18 years Jenny House has offered
                      the most illuminating moments to the Korean glamour
                      industry by giving the best professional services and
                      products to beautify the skin of tens of thousands women
                      and men including more than 1,000 celebrities and half a
                      million customers.
                    </p>
                  </div>
                </Col>
                <Col>
                  <img src={bn2} alt="bn2" className="img-brand2" />
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <div className="Container">
          <div className="ach-title">
            <h1>Achievements</h1>
          </div>
          <Row>
            <Col md={3}>
              <img src={ach1} alt="ach1" className="img-ach" />
            </Col>
            <Col md={3}>
              <div className="desc">
                <h3>THE BEST HAIR & MAKEUP TEAMS IN KOREA</h3>
                <p>Sports Reporter 80 Jenny House professional artists</p>
              </div>
            </Col>
            <Col md={3}>
              <img src={ach3} alt="ach3" className="img-ach" />
            </Col>
            <Col md={3}>
              <div className="desc">
                <h3>HAIR & MAKEUP ARTISTS FOR WORLD STARS VISITING KOREA</h3>
                <p>Miranda Kerr, Tilda Swinton, Lady GaGa, etc</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img src={ach2} alt="ach2" className="img-ach2" />
            </Col>
            <Col md={3}>
              <div className="ach-desc">
                <h3>
                  CURRENTLY IN CHARGE OF DOING HAIR & MAKEUP FOR 600 KOREAN
                  CELEBRITIES
                </h3>
                <p>Kim Tae-ri, Han Ji-min and Bae Suzy, and Wanna One</p>
              </div>
            </Col>
            <Col md={3}>
              <img src={ach4} alt="ach4" className="img-ach2" />
            </Col>
            <Col md={3}>
              <div className="ach-desc">
                <h3>TRAINING SERVICE FOR TOP BEAUTY BRAND</h3>
                <p>AMOREPACIFIC, LG Household & Health Care , etc</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="Container">
          <div className="quotes">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <h1>
                  “The best skin condition for creating a perfect makeup look”
                </h1>
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <p>
                  Great stories have a personality. Consider telling a great
                  story that provides personality. Writing a story with
                  personality for potential clients will assist with making a
                  relationship connection. This shows up in small quirks like
                  word choices or phrases. Write from your point of view, not
                  from someone else's experience.
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
          </div>
        </div>{" "}
        <div className="Container">
          <div className="wed-title">
            <h1>CELEB WEDDING</h1>
          </div>
          <div className="wdg-grid">
            <Row>
              <Col md={1}></Col>
              <Col>
                {" "}
                <img src={wd1} alt="wd1" className="img-wd" />
                <div className="actor">
                  <h3>Son Hye Jin</h3>
                </div>
              </Col>
              <Col>
                {" "}
                <img src={wd2} alt="wd2 " className="img-wd" />
                <div className="actor">
                  <h3>Park Shin Hye</h3>
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Brand;
