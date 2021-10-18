import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <Container className="pt-2">
          <Row className="justify-content-between">
            <Col className="d-flex header-top-container">
              <div></div>
              <i class="fas fa-map-marker-alt me-2"></i>
              <p className="me-2">35 West Dental Street, California 1004</p>
              <i class="fas fa-envelope me-2"></i>
              <a className="me-2" href="mailto:info@xyz.com">
                info@xyz.com
              </a>
            </Col>
            <Col className="d-flex justify-content-end">
              <a href="/#" target="_blank">
                <i className="fab fa-facebook-square header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-twitter-square header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i class="fab fa-instagram header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-linkedin header-left-icon"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-container sticky-top">
        <Container>
          <Row className="justify-content-between">
            <Col>
              <Link to="/">
                <img src="https://i.ibb.co/RgzdH5T/logo.png" alt="Logo" />
              </Link>
            </Col>
            <Col>
              <Nav className="justify-content-end nav-bar" activeKey="/home">
                <NavLink
                  to="/home"
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#419DE2",
                  }}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/services"
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#419DE2",
                  }}
                >
                  Services
                </NavLink>

                <NavLink
                  to="/contact"
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#419DE2",
                  }}
                >
                  Contact Us
                </NavLink>
                <Link to="login">
                  <button type="button" className="btn btn-secondary">
                    Log in
                  </button>
                </Link>
                <Link to="register">
                  <button type="button" className="btn btn-secondary">
                    Sign UP
                  </button>
                </Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
