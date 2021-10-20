import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const Department = () => {
  const { departmentID } = useParams();
  return (
    <div>
      <Container>
        <h2>The Service Detail Number Is {departmentID}</h2>
      </Container>
    </div>
  );
};

export default Department;
