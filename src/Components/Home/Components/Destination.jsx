import React, { useEffect, useRef, useState } from "react";
import "./Style/Destination.css";

import { Col, Container, Row } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
const Destination = () => {
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
              imageHeight={100}
              imageUrl="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww&w=1000&q=80"
              title="Goa, India"
              viewType="Sea Beach"
            />
            <DestinationCard
              imageHeight={100}
              imageUrl="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701378069.jpg"
              title="Mexico, Sea Beach"
              viewType="Sea Beach"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-sm-6">
            <DestinationCard
              imageHeight={100}
              cardHeight={66}
              imageUrl="https://www.kudadoo.com/wp-content/uploads/2019/04/Pool_dinner_retreat.jpg"
              title="Kudado, Maldevies"
              viewType="Sea Beach"
            />
          </div>
          <Col className="col-12 col-md-12 col-sm-12 col-lg-5  d-flex flex-column gap-3 ">
            <div>
              <DestinationCard
                imageHeight={100}
                imageUrl="https://media.istockphoto.com/id/653953140/photo/hindu-temple-in-bali.jpg?b=1&s=170667a&w=0&k=20&c=-Zo3LO0CI8fbtwkUUH50QJ0wtVjzGj1aCtfRIHDI5uQ="
                title="Bali, Indonesia"
                viewType="Hill View"
              />
            </div>
            <Row className="row d-flex justify-content-between h-100">
              <Col className=" col-lg-6 col-xl-5">
                <DestinationCard
                  imageHeight={100}
                  imageUrl="https://media.istockphoto.com/id/529179163/photo/tibet-mount-kailash-north-face.jpg?s=612x612&w=0&k=20&c=ZcDVSIEPZk3q3wIZCWw4lUGwreED1lS1kjWSDTeMqVg="
                  title="Kailash"
                  viewType="Hill View"
                />
              </Col>
              <Col className=" col-lg-6 col-xl-7">
                <DestinationCard
                  imageHeight={100}
                  imageUrl="https://c4.wallpaperflare.com/wallpaper/403/1021/262/landscape-building-old-building-bangkok-wallpaper-preview.jpg"
                  title="Thailand"
                  viewType="Monuments"
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
