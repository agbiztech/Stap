import React from "react";
import "./Style/Packages.css";
import InsightsIcon from "@mui/icons-material/Insights";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Button, TextField } from "@mui/material";
const Packages = (props) => {
  return (
    <div className="pck_container">
      <div className="pck_wrapper">
        <div className="pck_sec1">
          <div className="pck_section"></div>
          <div className="pck_s1_img">
            <img className="s1_img" src={props.data.image} alt="" />
          </div>
          <div className="pck_s1_txt">
            <h1 className="pck_s1_heading">{props.data.heading}</h1>
            <p>{props.data.para}</p>
            <div className="pck_s1_tags">
              <div className="tags_wrapper">
                <div className="tags_icon">
                  <InsightsIcon sx={{ fontSize: "4rem" }} />
                </div>
                <div className="tags_txt">
                  <div className="tags_no">{props.data.tag1_no}</div>
                  <div className="tags_line">{props.data.tag1_name}</div>
                </div>
              </div>
              <div className="tags_wrapper">
                <div className="tags_icon">
                  <EmojiEventsIcon sx={{ fontSize: "4rem" }} />
                </div>
                <div className="tags_txt">
                  <div className="tags_no">{props.data.tag2_no}</div>
                  <div className="tags_line">{props.data.tag2_name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pck_sec3">
          <div className="s3_inp_wrapper">
            <div className="s3_txt">
              <h4>Where</h4>
            </div>
            <div className="s3_input">
              <div className="s3_inp">
                <TextField
                  style={{ width: "100%" }}
                  id="standard-basic"
                  label="Destination"
                  variant="standard"
                />
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
                <TextField
                  style={{ width: "100%" }}
                  id="standard-basic"
                  label="Start Date"
                  variant="standard"
                />
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
                <TextField
                  style={{ width: "100%" }}
                  id="standard-basic"
                  label="End Date"
                  variant="standard"
                />
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
                <TextField
                  style={{ width: "100%" }}
                  id="standard-basic"
                  label="Total Number"
                  variant="standard"
                />
              </div>
              <div className="s3_inp_icon"></div>
            </div>
          </div>

          <div className="inp_btn">
            <Button
              variant="contained"
              className="pck_btn"
              sx={{
                background: "#399f6e",
                fontSize: "20px",
                borderRadius: "10px",
                "&:hover": { background: "#399f6e" },
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
