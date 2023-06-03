import React from 'react'
import './Style/Advantages.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Advantages = (props) => {
  return (
    <div className='adv_container'>
      <div className="adv_wrapper">
        <div className="adv_section">
          <div className="adv_logo"><RocketLaunchIcon sx={{height:'3rem',width:'3rem', color:'orange'}}/></div>
          <div className="adv_txt">
            <div className="adv_heading">
              <h3>{props.data.heading1}</h3>
            </div>
            <div className="adv_para">
            <p>{props.data.para1}</p>
            </div>
          </div>
        </div>
        <div className="adv_section">
          <div className="adv_logo"><Brightness5Icon sx={{height:'3rem',width:'3rem', color:'orange'}}/></div>
          <div className="adv_txt">
            <div className="adv_heading">
              <h3>{props.data.heading2}</h3>
            </div>
            <div className="adv_para">
              <p>{props.data.para2}</p>
            </div>
          </div>
        </div>
        <div className="adv_section">
          <div className="adv_logo"><AccountBalanceIcon sx={{height:'3rem',width:'3rem', color:'orange'}}/></div>
          <div className="adv_txt">
            <div className="adv_heading">
              <h3>{props.data.heading3}</h3>
            </div>
            <div className="adv_para">
            <p>{props.data.para3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages