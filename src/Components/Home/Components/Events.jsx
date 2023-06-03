import React from "react";
// import "./Style/Events.css";
import "./Style/Slider.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Button, TextField } from "@mui/material";
import "swiper/swiper-bundle.min.css";
import { FreeMode, Navigation } from "swiper";
import { Card, Col, Container, Row } from "react-bootstrap";
import BorderColorIcon from "@mui/icons-material/BorderColor";
const Events = (props) => {
  return (
    <>
      <Container className="my-5">
        <h1>Top Event For You</h1>
      </Container>
      <Container className="mb-5">
        
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              756: {
                slidesPerView: 2,
                spaceBetween:20,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {props.data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <Card.Img src={item.image} variant="top" />
                  <Card.Body>
                    <Card.Subtitle className="mb-3 text-muted d-flex  align-items-center blogDate">
                      {" "}
                      <BorderColorIcon style={{ scale: "0.6" }} />{" "}
                      {item.duration}
                    </Card.Subtitle>

                    <Card.Title className="my-4">{item.place}</Card.Title>
                    <Card.Text className="blogDescription my-4">
                      {item.placeDes}
                    </Card.Text>
                    <Button
                      variant="contained"
                      className="search-btn"
                      sx={{
                        background: "#399f6e",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontSize: "18px",
                        borderRadius: "10px",
                        "&:hover": { background: "#6c4a40" },
                      }}
                    >
                      {item.btn}
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        
      </Container>
    </>
  );
};

export default Events;
