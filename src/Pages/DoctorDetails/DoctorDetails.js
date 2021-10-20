import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const DoctorDetails = () => {
  const { doctorID } = useParams();
  return (
    <div>
      <Container>
        <h2>The Doctor ID number is {doctorID}</h2>
      </Container>
    </div>
  );
};

export default DoctorDetails;
