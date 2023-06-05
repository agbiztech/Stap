import React from "react";
import "./Style/Newsletter.css";
import { Button, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
const Newsletter = (props) => {
  return (
    <>
    
      <div className=" container newsletter-section mb-5">
       <form action="">
        <h1 style={{fontFamily:"montserrat"}}>{props.data.Heading}<span>Newsletter</span></h1>
        <p>{props.data.Para}</p>
        <div className="email-box">
            <EmailIcon className="email-icon"/><input type="email" name="" placeholder="Enter your Email" className="newsletter-text-box"/>
            <button type="button" className="newsletter-btn">{props.data.btn}</button>
        </div>
       </form>
      </div>
    </>
  );
};

export default Newsletter;
