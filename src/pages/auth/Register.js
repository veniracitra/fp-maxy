import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import fregister from "../../assets/login.png";
import "./style.css";
const Register = () => {
  return (
    <>
    <Container>
    <div className="row">
        <div className="col-lg-6 register-form-section">
          <div className="register-tagline">
            <h2>Mulai Sekarang</h2>{" "}
          </div>
          <div className="form-register">
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap Anda"
                  className="form-nama"
                ></Form.Control>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan Email Anda"
                    className="form-email"
                  ></Form.Control>
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPaswword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukka Kata Sandi Anda"
                  className="form-pass"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPaswword">
                <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukka Kata Sandi Anda"
                  className="form-pass"
                ></Form.Control>
              </Form.Group>
              <div className="btn-submit">
                <Button variant="primary" type="submit">
                  DAFTAR
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={fregister}
            alt="fregister - pict"
            className="img-register"
          />
        </div>
      </div>
    </Container>
    </>
  );
};

export default Register;
