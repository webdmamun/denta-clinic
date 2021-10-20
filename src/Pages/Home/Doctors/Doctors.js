import React, { useEffect, useState } from "react";
import "./Doctors.css";
import { Col, Container, Row } from "react-bootstrap";
import Doctor from "./Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctorsdb.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <Row className="py-5">
          <Col>
            <h2 className="doctors-area-heading">
              Enjoy Specialized Care Through <br />
              Precision, Artistry, and Experience
            </h2>
          </Col>
        </Row>

        <div className="row gy-3 mb-5">
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor.id}></Doctor>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Doctors;
