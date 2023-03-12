import React from "react";

import { Button, Form } from "react-bootstrap";
import flogin from "../../assets/login.png";

import "./style.css";
const Login = () => {
  return (
    <section>
      <div className="row">
        <div className="col-lg-6">
          <img src={flogin} alt="login - pict" className="img-login" />
        </div>
        <div className="col-lg-6 login-form-section">
          <div className="login-tagline">
            <h2>Masuk Sekarang</h2>
            <h2>Mulai Pengalaman Baru Anda!</h2>
          </div>
          <div className="form-login">
            <Form>
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
              <Form.Group className="mb-3" controlId="formBasicPaswword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukka Kata Sandi Anda"
                  className="form-pass"
                ></Form.Control>
              </Form.Group>
              <span className="forget-pass ">Lupa Kata Sandi?</span>
              <div className="btn-Submit">
                <Button variant="primary" type="submit">
                  MASUK
                </Button>
              </div>
            </Form>
          </div>
          <div className="register-tagline text-center">
            <p>
              Belum Punya Akun? <a href="/reg">Daftar Sekarang</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
