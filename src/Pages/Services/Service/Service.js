import React from "react";

const Service = (props) => {
  const { title, description, img } = props.service;
  return (
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="card">
        <img className="card-image" src={img} alt="" />
        <div className="p-3 card-content">
          <h4 className="card-title mb-3">{title}</h4>
          <p className="text-center">{description}</p>
          <div className="clearfix"></div>
        </div>
        <div className="card-read-more"></div>
      </div>
    </div>
  );
};

export default Service;
