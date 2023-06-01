import React from "react";
import "./Style/Destination.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Col, Container, Row } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
const Destination = () => {
  return (
    <>
      <Container className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="destinationHeading">Top Destination & Cities</h1>
        <div className="d-flex justify-content-between gap-2">
          <button className="btn destinationButton">
            <ArrowForwardIcon className="destinationNavigation" style={{ rotate: "180deg" }} />{" "}
          </button>
          <button className="btn destinationButton">
            <ArrowForwardIcon className="destinationNavigation" />
          </button>
        </div>
      </Container>
      <Container >
        <Row className="g-3">
          <div className="col-6 col-md-6 col-lg-4 col-sm-6 d-flex flex-column gap-3">
            <DestinationCard />
            <DestinationCard />
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-sm-6">
            <DestinationCard  hieght={100}/>
          </div>
          <Col className="col-md-12 col-sm-12 col-lg-5  d-flex flex-column gap-3 ">
            <div>
              <DestinationCard hieght={100}/>
            </div>
            <Row className="row d-flex justify-content-between h-100">
              <Col className=" col-lg-6 col-xl-5">
              <DestinationCard hieght={100}/>
              </Col>
              <Col className=" col-lg-6 col-xl-7">
              <DestinationCard hieght={100}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Destination;
