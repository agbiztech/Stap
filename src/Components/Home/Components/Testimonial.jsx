import React from 'react'
import './Style/Testimonial.css'
const Testimonial = (props) => {
  return (
    <div className='tst_container'>
      <div className="tst_wrapper">
        <div className="tst_heading">
          <h2>{props.data.heading}</h2>
        </div>
        <div className="tst-card_container">
        <div className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image1} alt="" />
          </div>
          <div className="tst_card_name"><h3>{props.data.name1}</h3></div>
          <div className="tst_card_rate"></div>
          <div className="tst_card_para"><p>{props.data.para1}</p></div>
        </div>
        <div className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image2} alt="" />
          </div>
          <div className="tst_card_name"><h3>{props.data.name2}</h3></div>
          <div className="tst_card_rate"></div>
          <div className="tst_card_para"><p>{props.data.para2}</p></div>
        </div>
        <div className="tst_cards">
          <div >
            <img className="tst_card_img" src={props.data.image3} alt="" />
          </div>
          <div className="tst_card_name"><h3>{props.data.name3}</h3></div>
          <div className="tst_card_rate"></div>
          <div className="tst_card_para"><p>{props.data.para3}</p></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial