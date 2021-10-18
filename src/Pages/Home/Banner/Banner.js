import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/WsvZ1pR/slides-bg3.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slide-caption">
            <h3 className="slide-title">
              Dentistry with <br />a personal touch
            </h3>
            <p className="slide-sub-title">Better teeth, Better Health!</p>
            <button className="btn btn-lg btn-info slide-button">
              Book an Appointment
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Q7VpP2k/slides-bg1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="slide-caption">
            <h3 className="slide-title">
              Beautiful <br />
              Natural Smiles{" "}
            </h3>
            <p className="slide-sub-title">A perfect smile guaranteed.</p>
            <button className="btn btn-lg btn-info slide-button">
              Book an Appointment
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/vJqwq79/slides-bg2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="slide-caption">
            <h3 className="slide-title">
              Let us brighten <br />
              your smaile!{" "}
            </h3>
            <p className="slide-sub-title">The gentle dental center.</p>
            <button className="btn btn-lg btn-info slide-button">
              Book an Appointment
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
