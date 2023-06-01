import React from 'react'
import './Style/Packages.css'
import InsightsIcon from '@mui/icons-material/Insights';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Button, TextField } from '@mui/material';
const Packages = () => {
  return (
    <div className='pck_container'>
      <div className="pck_wrapper">
        <div className="pck_sec1">
          <div className="pck_s1_img">
            <img className='s1_img' src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
          </div>
          <div className="pck_s1_txt">
            <h1 className='pck_s1_heading'>A tour to a ethnic evolutionary life at cheap rate</h1>
            <p>Step with us into the heart and soul of India, a spritual land, full of asthetic beauty, vibrant colors and food to savour.</p>
            <div className="pck_s1_tags">
              <div className="tags_wrapper">
              <div className="tags_icon"><InsightsIcon sx={{fontSize:'5rem'}}/></div>
              <div className="tags_txt">
                <div className="tags_no">12</div>
                <div className="tags_line">Years Experience</div>
              </div>
              </div>
              <div className="tags_wrapper">
              <div className="tags_icon"><EmojiEventsIcon sx={{fontSize:'5rem'}}/></div>
              <div className="tags_txt">
                <div className="tags_no">29</div>
                <div className="tags_line">Awards Gained</div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pck_sec2">
        </div>
        <div className="pck_sec3">
          <div className="s3_inp_wrapper">
          <div className="s3_txt">
            <h4>Where</h4>
          </div>
          <div className="s3_input">
          <div className="s3_inp">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div className="s3_inp_icon"></div>
          </div>
          </div>
          <div className="s3_inp_wrapper">
          <div className="s3_txt">
            <h4>From</h4>
          </div>
          <div className="s3_input">
          <div className="s3_inp">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div className="s3_inp_icon"></div>
          </div>
          </div>
          <div className="s3_inp_wrapper">
          <div className="s3_txt">
            <h4>To</h4>
          </div>
          <div className="s3_input">
          <div className="s3_inp">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div className="s3_inp_icon"></div>
          </div>
          </div>
          <div className="s3_inp_wrapper">
          <div className="s3_txt">
            <h4>Guests</h4>
          </div>
          <div className="s3_input">
          <div className="s3_inp">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div className="s3_inp_icon"></div>
          </div>
          </div>

          <div className="inp_btn">
          <Button variant="contained" className='pck_btn' sx={{ background:'#6c4a40', fontSize:'22px',borderRadius:'10px', '&:hover':{background:"#6c4a40"}}}>Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages