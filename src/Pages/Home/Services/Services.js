import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Services.css";
import Service from "./Services/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="full-services-area">
      <Container>
        <div className="row">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
