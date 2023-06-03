import React from "react";
import "./Style/SpecialOffer.css";
import "./Style/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Button, TextField } from "@mui/material";

import "swiper/swiper-bundle.min.css";
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
                spaceBetween:20,
              },
              756: {
                slidesPerView: 2,
                spaceBetween:20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween:20,
              },
            }}
          >
            {props.data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className=" text-white eventCard" style={{}}>
                  <Card.Img src={item.linkedImg} alt="Card image" style
                  ={{background:"rgba(52, 51, 51)"}} />
                  <Card.ImgOverlay style={{}}>
                    <Card.Title style
                  ={{fontWeight:"bold",color:"white",opacity:1}}> {item.title}</Card.Title>
                    <Card.Text>
                      {item.paragraph}
                    </Card.Text>
                    <Card.Text>{item.place}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        
      </Container>
    </>
  );
};

export default SpecialOffer;
