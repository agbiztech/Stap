import React from "react";
// import "./Style/Events.css";
import "./Style/Slider.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Button, TextField } from "@mui/material";
import "swiper/swiper-bundle.min.css";
import { FreeMode, Navigation } from "swiper";
import { Card, Col, Container, Row } from "react-bootstrap";
const Events = ({ data }) => {
  return (
    <>
      <Container className="my-5">
        <h1>Top Event For You</h1>
      </Container>
      <Container className="mb-5">
        <Row>
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
              500: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="eventCard" key={index}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.place}</Card.Title>
                    <Card.Text>
                      {item.placeDes}<br/>
                      {item.duration}
                    </Card.Text>
                    <Button
                variant="contained"
                className="search-btn"
                sx={{
                  background: "#6c4a40",
                  paddingLeft:"20px",
                  paddingRight:"20px",
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
        </Row>
      </Container>
    </>
  );
};

export default Events;
