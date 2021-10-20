import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5 footer-area">
      <Container>
        <Row className="justify-content-between">
          <Col className="col-md-3 col-lg-6 my-3">
            <div>
              <Link to="/">
                <img src="https://i.ibb.co/RgzdH5T/logo.png" alt="Logo" />
              </Link>
              <p>
                We offer a range of services to help you overcome <br /> fear
                and finally enjoy good oral health.
              </p>
              <a href="/#" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end col-md-3 col-lg-6 my-3">
            <div className="wrapper">
              <div className="bottom">
                <form action="#">
                  <div className="input-box">
                    <input
                      type="text"
                      name=""
                      defaultValue=""
                      placeholder="Enter your email"
                      required
                    />

                    <input type="submit" name="" defaultValue="Subscribe" />
                  </div>
                </form>
                <div className="info">
                  Get the latest news and updates right at your inbox.
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center footer-copyright">
          {" "}
          &#169; 2022 Educal, All Rights Reserved. Design By{" "}
          <a href="webdmamun.com" target="_blank">
            Mamun Ahmed
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
