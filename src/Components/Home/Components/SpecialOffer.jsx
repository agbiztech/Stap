import React from "react";
import "./Style/SpecialOffer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper-bundle.min.css";
const SpecialOffer = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="special-offer-heading">Special offer</h1>
        </div>
        <div className="row special-offer-section">
          
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={50}
          // slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
            breakpoints={{
              0:{
                slidesPerView:1,
                spaceBetween:10,
          
              },
              400:{
                slidesPerView:3,
                spaceBetween:20,
          
              },
              720:{
                slidesPerView:3,
                spaceBetween:20,
          
              },
              990:{
                slidesPerView:3,
                spaceBetween:40,
          
              }
            }}
          >
            {props.data.map((item) => (
              <SwiperSlide key={item.image} className="card-container">
                <img src={item.linkedImg} className="special-offer-image " />
                <div className="offers-intro">
                  <h3 >{item.title}</h3>
                  <p >{item.paragraph}</p>
                  <span>{item.price}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
