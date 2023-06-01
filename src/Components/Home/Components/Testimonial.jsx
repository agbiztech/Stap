import React from 'react'
import './Style/Testimonial.css'
const Testimonial = () => {
  return (
    <div className='tst_container'>
      <div className="tst_wrapper">
        <div className="tst_heading">
          <h2>Client Testimonial</h2>
        </div>
        <div className="tst_cards">
          <div className="tst_card_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCQkJ9H19piIgHPU_JNyHdFiRcDSGjbhDRCBkVHg&s" alt="" />
          </div>
          <div className="tst_card_name"><h3>Jonny Walker Hussy</h3></div>
          <div className="tst_card_rate"></div>
          <div className="tst_card_para"><p>Quote testimonials are ads or artwork that display positive statements about your company from a brand evanglist or a delighted customer.The quote is usually accompanied by an image.</p></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial