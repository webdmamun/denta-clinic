import React from "react";
import "./Feature.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Feature = () => {
  return (
    <div className="feature-container">
      <Container>
        <Row>
          <Col>
            <h2 className="feature-title">
              Features That You <br /> Will Love Us
            </h2>
          </Col>
          <Col className="mt-5 d-flex justify-content-end">
            <Link to="/services">
              <button className="btn btn-lg btn-info">View All Services</button>
            </Link>
          </Col>
        </Row>
        <div className="row">
          <div className="d-flex justify-content-center card-container">
            {/* single card one*/}
            <div className="card card-1 single-support-card">
              <i class="fas fa-tooth card-icon"></i>
              <h5 className="card-title">Teeth Whitening</h5>
              <p className="text-center">
                Whitening is among the most popular dental procedures because it
                can greatly improve how your teeth look.
              </p>
              {/* Arrow button start  */}
              <Link to="/about" className="cm-animated-arrow">
                <span className="cm-the-arrow cm-left">
                  <span className="shaft"></span>
                </span>
                <span className="cm-main">
                  <span className="cm-text">Read More</span>
                  <span className="cm-the-arrow cm-right">
                    <span className="cm-shaft"></span>
                  </span>
                </span>
              </Link>
              {/* Arrow button end  */}
            </div>

            {/* single card two*/}
            <div className="card card-1 single-support-card">
              <i className="fas fa-certificate card-icon"></i>
              <h5 className="card-title">Certified Dentists</h5>
              <p className="text-center">
                Dental anesthesia is a field of anesthesia that includes not
                only local but sedation and general anesthesia.
              </p>
              {/* Arrow button start  */}
              <Link to="/about" className="cm-animated-arrow">
                <span className="cm-the-arrow cm-left">
                  <span className="shaft"></span>
                </span>
                <span className="cm-main">
                  <span className="cm-text">Read More</span>
                  <span className="cm-the-arrow cm-right">
                    <span className="cm-shaft"></span>
                  </span>
                </span>
              </Link>
              {/* Arrow button end  */}
            </div>
            {/* single card three*/}
            <div className="card card-1 single-support-card">
              <i className="fas fa-teeth-open card-icon"></i>
              <h5 className="card-title">Quality Brackets</h5>
              <p className="text-center">
                Orthodontics is the branch of dentistry that corrects teeth and
                jaws that are positioned improperly.
              </p>
              {/* Arrow button start  */}
              <Link to="/about" className="cm-animated-arrow">
                <span className="cm-the-arrow cm-left">
                  <span className="shaft"></span>
                </span>
                <span className="cm-main">
                  <span className="cm-text">Read More</span>
                  <span className="cm-the-arrow cm-right">
                    <span className="cm-shaft"></span>
                  </span>
                </span>
              </Link>
              {/* Arrow button end  */}
            </div>
            {/* single card four */}
            <div className="card card-1 single-support-card">
              <i className="far fa-gem card-icon"></i>
              <h5 className="card-title">Experience</h5>
              <p className="text-center">
                Dental anesthesia is a field of anesthesia that includes not
                only local but sedation and general anesthesia.
              </p>
              {/* Arrow button start  */}
              <Link to="/about" className="cm-animated-arrow">
                <span className="cm-the-arrow cm-left">
                  <span className="shaft"></span>
                </span>
                <span className="cm-main">
                  <span className="cm-text">Read More</span>
                  <span className="cm-the-arrow cm-right">
                    <span className="cm-shaft"></span>
                  </span>
                </span>
              </Link>
              {/* Arrow button end  */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
