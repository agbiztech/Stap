import React from "react";
import "./Style/Events.css";
import "./Style/Slider.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Button, TextField } from "@mui/material";
import "swiper/swiper-bundle.min.css";
import { FreeMode, Navigation } from "swiper";
import { Card, Col, Container, Row } from "react-bootstrap";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {props.data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <Card.Img src={item.image} variant="top" />
                <Card.Body>
                  <div className="d-flex align-items-end  justify-content-between">
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Title className="tour-title mb-2">
                        {item.place}
                      </Card.Title>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                      <BookmarkIcon className="d-flex align-items-end justify-content-between bg-light" />
                    </div>
                  </div>

                  <Card.Subtitle className="pt-2 text-muted d-flex  align-items-center tour-info">
                    {" "}
                    {item.placeDes}
                  </Card.Subtitle>
                  <hr />
                  <Card.Subtitle className=" text-muted d-flex  align-items-center justify-content-between tour-info">
                    <div className="d-flex justify-content-center align-items-center event-duration">
                      <TimelapseIcon  className="mx-1" />
                      {item.duration}
                    </div>
                    <div className="d-flex justify-content-center align-items-center event-capacity">
                      <AccountCircleIcon className="mx-1"/>
                      {item.capacity}
                    </div>
                  </Card.Subtitle>
                  <div className="d-flex  align-items-center justify-content-between my-3 mb-0 ">
                    <Card.Text className="my-4">
                      <div className="d-flex justify-content-between align-items-center event-price">
                        ${item.price}
                      </div>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-cente">
                      <Button
                        variant="contained"
                        className="search-btn"
                        sx={{
                          background: "#399f6e",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          fontSize: "15px",
                          borderRadius: "10px",
                          "&:hover": { background: "#2e875c" },
                        }}
                      >
                        {item.btn}
                      </Button>
                    </div>
                  </div>
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
