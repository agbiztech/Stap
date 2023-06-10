import React from "react";
import { Col, Row } from "react-bootstrap";

import "./Style/AboutUsSection.css";
import AboutUsCard from "./AboutUsCard";

const AboutUsSection = (props) => {
  return (
    <div className="container-fluid   py-5 px-3">
      <Row className="gy-3">
        <Col className=" col-lg-6">
          <div className=" ms-sm-4 contentContainer">
            <h1 className="mb-4">More About Us</h1>
            <Row className="g-lg-4 g-4 g-sm-3">
              {props.data.map((item, index) => (
                <Col className="col-12 col-sm-6" key={index}>
                  <AboutUsCard data={item} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col className="col-sm-12 col-lg-6">
          <img
            src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabian-wiktor-994605.jpg&fm=jpg"
            className="img-fluid rounded d-none d-md-block aboutUsImage"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsSection;
