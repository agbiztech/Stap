import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination , Navigation, Autoplay} from "swiper";
import './Style/Testimonial.css'
const Testimonial = (props) => {
  return (
    <div className='tst_container'>
      <div className="tst_wrapper">
        <div className="tst_heading">
          <h1>{props.data.heading}</h1>
        </div>
        <div className="tst-card_container">
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween:20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween:20,
          },
        }}
        loop={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={60}
        freeMode={true}
        modules={[ Pagination, Navigation, Autoplay]}
        className="mySwiper swiper_container"
      >
      
        <SwiperSlide className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image1} alt="" />
          </div>
          <div className="tst_content">
          <div className="tst_card_name"><h3>{props.data.name1}</h3></div>
          <div className="tst_card_rate"><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
          <div className="tst_card_para"><p><FormatQuoteIcon rotate={180}/>{props.data.para1}<FormatQuoteIcon/></p></div>
          </div>
          </SwiperSlide>
    
    
        <SwiperSlide className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image2} alt="" />
          </div>
          <div className="tst_content">
          <div className="tst_card_name"><h3>{props.data.name1}</h3></div>
          <div className="tst_card_rate"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
          <div className="tst_card_para"><p><FormatQuoteIcon rotate={180}/>{props.data.para1}<FormatQuoteIcon/></p></div>
          </div>
          </SwiperSlide>
  
    
        <SwiperSlide className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image3} alt="" />
          </div>
          <div className="tst_content">
          <div className="tst_card_name"><h3>{props.data.name1}</h3></div>
          <div className="tst_card_rate"><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
          <div className="tst_card_para"><p><FormatQuoteIcon rotate={180} />{props.data.para1}<FormatQuoteIcon/></p></div>
          </div>
          </SwiperSlide>
      

        <SwiperSlide className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image1} alt="" />
          </div>
          <div className="tst_content">
          <div className="tst_card_name"><h3>{props.data.name1}</h3></div>
          <div className="tst_card_rate"><StarIcon/><StarIcon/><StarIcon/></div>
          <div className="tst_card_para"><p><FormatQuoteIcon rotate={180}/>{props.data.para1}<FormatQuoteIcon/></p></div>
          </div>
          </SwiperSlide>      
        </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Testimonial