import React from "react";
import "./Feature.css";
import { Container } from "react-bootstrap";
const Feature = () => {
  return (
    <>
      <Container>
        <div className="my-5 row justify-content-between">
          <div className="mx-3 col-lg-4 col-md-6 single-card">
            <div className="content">
              <h2>Certified Dentist</h2>
              <p>Proin gravida nibh velit auctor aliquet aenean.</p>
            </div>
          </div>
          <div className="mx-3 col-lg-4 col-md-6 single-card">
            <div className="content">
              <h2>Certified Dentist</h2>
              <p>Proin gravida nibh velit auctor aliquet aenean.</p>
            </div>
          </div>
          <div className="mx-3 col-lg-4 col-md-6 single-card">
            <div className="content">
              <h2>Certified Dentist</h2>
              <p>Proin gravida nibh velit auctor aliquet aenean.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Feature;
