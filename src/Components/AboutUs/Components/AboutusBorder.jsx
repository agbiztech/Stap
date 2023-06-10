import React from "react";
import "./Style/AboutusBorder.css";
const AboutusBorder = (props) => {
  return (
    <div className="aboutus-border-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12 about-border-heading">
            <h1 className="about-heading">
              {props.data.Heading}
              <h1 className="us-heading-bg-color">Us</h1>
            </h1>
          </div>
          <div className="col-md-12 aboutus-para-container">
            <p className="aboutus-para">{props.data.Para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusBorder;
