import React, { useEffect, useRef, useState } from "react";
import "./Style/Destination.css";

import { Col, Container, Row } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
const Destination = (props) => {
const width = useRef([window.innerWidth])
console.log(width.current)
  return (
    <div className="Destination pt-3">
      <Container className="d-flex justify-content-between align-items-center py-3">
        <h1 className="destinationHeading">Top Destination & Cities</h1>
      </Container>
      <Container className="">
        <Row className="g-3 destinationRow">
          <div className="col-12 col-md-6 col-lg-4 col-sm-6 d-flex flex-column gap-3">
            <DestinationCard
              data = {props.data[0]}
            />
            <DestinationCard
              data = {props.data[1]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-sm-6">
            <DestinationCard
             data = {props.data[2]}
            />
          </div>
          <Col className="col-12 col-md-12 col-sm-12 col-lg-5  d-flex flex-column gap-3 ">
            <div>
              <DestinationCard
                data = {props.data[3]}
              />
            </div>
            <Row className="row d-flex justify-content-between h-100">
              <Col className=" col-lg-6 col-xl-5">
                <DestinationCard
                  data = {props.data[4]}
                />
              </Col>
              <Col className=" col-lg-6 col-xl-7">
                <DestinationCard
                data = {props.data[5]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
