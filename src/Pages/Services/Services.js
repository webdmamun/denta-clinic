import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Services.css";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="full-cart-area">
      <Container>
        {/* cart area header */}

        <Row className="cart-heading">
          <Col>
            <h2 className="cart-heading-title mt-5">
              Find The Best <br />
              Service For You
            </h2>
            <p className="mb-5">
              You don't have to struggle alone, you've got our assistance and
              help.
            </p>
          </Col>
        </Row>

        {/* Load course data  */}
        <div className="row gy-5">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
