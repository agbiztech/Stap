import React from 'react'
import './Style/Advantages.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Brightness5Icon from '@mui/icons-material/Brightness5';
const Advantages = () => {
  return (
    <div className='adv_container'>
      <div className="adv_wrapper">
        <div className="adv_section">
          <div className="adv_logo"><RocketLaunchIcon/></div>
          <div className="adv_txt">
            <div className="adv_heading">
              <h3>Best Policy</h3>
            </div>
            <div className="adv_para">
            <p>We provide comprehensive and accurate information to customers.Including pricing,availability and reviews from other travellers</p>
            </div>
          </div>
        </div>
        <div className="adv_section">
          <div className="adv_logo"><Brightness5Icon/></div>
          <div className="adv_txt">
            <div className="adv_heading">
              <h3>Access To All Activities</h3>
            </div>
            <div className="adv_para">
              <p>We provide comprehensive and accurate information to customers.Including pricing,availability and reviews from other travellers</p>
            </div>
          </div>
        </div>
        <div className="adv_section">
          <div className="adv_logo"><Brightness5Icon/></div>
          <div className="adv_txt">
            <div className="adv_heading">
              <h3>Access To All Activities</h3>
            </div>
            <div className="adv_para">
            <p>We provide comprehensive and accurate information to customers.Including pricing,availability and reviews from other travellers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages