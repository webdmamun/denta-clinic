import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctor.css";

const Doctor = (props) => {
  const { Name, title, img, description, id } = props.doctor;
  return (
    <>
      <Col>
        <div className="profile-card">
          <div className="text">
            <img src={img} alt="" />
            <h3>{Name}</h3>
            <p>{title}</p>
            <p>{description}</p>
          </div>
          <div className="btns">
            <Link to={`/doctor/${id}`}>
              <button className="btn btn-info btn-sm">
                Details and Contact
              </button>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Doctor;
