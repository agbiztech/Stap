import React from "react";
import "./Style/Newsletter.css";
import { Button, TextField } from "@mui/material";
const Newsletter = (props) => {
  return (
    <>
      <div className="container">
        <div className="row news-container-wrapper">
          <div className="col-md-6 news-image-container">
            <img src={props.data.image} alt="" className="news-image" />
          </div>
          <div className="col-md-6 newsletter-info">
            <h1 className="news-info-heading">
              {props.data.Heading}
              <br />
              <b>Newsletter</b>
            </h1>
            <p className="news-info-para">{props.data.Para}</p>

            <div className="news-subscription">
              <TextField
                className="news-input"
                label="Enter your Email"
                variant="standard"
                fullWidth
              />
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
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
