import React from "react";
import "./Service.css";

const Service = (props) => {
  const { title, img } = props.service;
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="card">
        <a className="img-card" href="/">
          <img className="card-image" src={img} alt="" />
        </a>
        <div className="card-content">
          <h4 className="card-title">
            <a href="/"> {title}</a>
          </h4>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more">
          <a href="/" className="btn btn-link btn-block">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
