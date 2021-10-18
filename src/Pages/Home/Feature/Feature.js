import React from "react";
import "./Feature.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Feature = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="feature-title">
              Features That You <br /> Will Love Us
            </h2>
          </Col>
          <Col className="mt-5 d-flex justify-content-end">
            <Link to="/services">
              <button className="btn btn-lg btn-info">View All Services</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feature;
