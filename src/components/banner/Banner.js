import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import bs1 from "../../assets/bestseller-1.png";
import bs2 from "../../assets/bestseller-2.png";
import bs3 from "../../assets/bestseller-3.png";
import "./style.css";

const Banner = () => {
  return (
    <Container>
        <div className="banner-top">
          <Row>
            <Col lg={6} ><img fluid src={bs1} alt="bs1" className="img-bs1" /></Col>
            <Col lg={6} ><img fluid src={bs2} alt="bs2" className="img-bs2" /></Col>
          </Row>
        </div>
        <div className="banner-bottom">
          <Row>
              <Col lg={6}>
                <h3>Jenny House</h3>
                <h1 className="banner-tagline">Steal The Spotlight</h1>
                <p>You were meant to be where the spotlight shines</p>
                <div className="btn-submit">
                        <Button variant="primary" type="submit">Discover It</Button>
                    </div>
                </Col>
              <Col lg={6} ><img fluid src={bs3} alt="bs3" className="img-bs3" /></Col>
            </Row>
        </div>
    </Container>
  );
};

export default Banner;
