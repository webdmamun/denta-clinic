import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { title, img, short_description, id } = props.service;
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="card">
        <img className="card-image" src={img} alt="" />
        <div className="p-3 card-content">
          <h4 className="card-title">{title}</h4>
          <p className="text-center">{short_description}</p>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more">
          <Link to={`/department/${id}`}>
            <button className="mb-3 ms-3 btn btn-primary">
              Details & Book
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
