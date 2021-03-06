import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className="header-top">
        <Container className="pt-2">
          <Row className="justify-content-between">
            <Col className="d-flex header-top-container">
              <div></div>
              <i className="fas fa-map-marker-alt me-2"></i>
              <p className="me-2">35 West Dental Street, California 1004</p>
              <i className="fas fa-envelope me-2"></i>
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
                <i className="fab fa-instagram header-left-icon"></i>
              </a>
              <a href="/#" target="_blank">
                <i className="fab fa-linkedin header-left-icon"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-container sticky-top">
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand as={Link} to="/home">
              <img src="https://i.ibb.co/RgzdH5T/logo.png" alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link
                as={NavLink}
                to="/home"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="nav-item"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#419DE2",
                }}
              >
                Contact Us
              </Nav.Link>
              {user.email && (
                <Navbar.Text>
                  Signed in as: <a href="/home">{user?.displayName}</a>
                  <img
                    className="mx-3 nav-user-img"
                    src={user.photoURL}
                    alt=""
                  />
                </Navbar.Text>
              )}
              {user.email ? (
                <Link to="login">
                  <button
                    type="button"
                    className="mx-3 btn btn-secondary"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link to="login">
                  <button type="button" className="mx-3 btn btn-secondary">
                    Log In
                  </button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
