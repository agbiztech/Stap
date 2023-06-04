import React from "react";
import "./Style/SpecialOffer.css";
import "./Style/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Button, TextField } from "@mui/material";

import "swiper/swiper-bundle.min.css";
import { WidthFull } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
const SpecialOffer = (props) => {
  return (
    <>
      <Container className="my-5">
        <h1>Special Offers</h1>
      </Container>
      <Container className="mb-5">
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            756: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {props.data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className=" text-white" style={{height:"50%"}}>
                <span className="special-discount">
                  <div className="special-discount-content">60% off</div>
                </span>
                <Card.Img src={item.linkedImg} alt="Card image" />
                <div
                  className="d-flex align-items-center"
                  
                >
                  <Card.ImgOverlay
                    style={{ background: "black", opacity: 0.6 }}
                  >
                    <div className=" mx-5 ">
                      <Card.Title
                        style={{ fontWeight: "bold", color: "white"}}
                        className="d-flex justify-content-start align-items-center"
                      >
                        {" "}
                        {item.title}
                      </Card.Title>
                      <Card.Text
                        style={{ color: "white", fontSize: "14px" }}
                        className="d-flex justify-content-start align-items-center"
                      >
                        {item.paragraph}
                      </Card.Text>
                      <Card.Text
                        style={{ color: "white", fontSize: "18px" }}
                        className="d-flex  align-items-center justify-content-start"
                      >
                        {item.place}
                      </Card.Text>
                    </div>
                   
                  </Card.ImgOverlay>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default SpecialOffer;
