import { Avatar } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BorderColorIcon from "@mui/icons-material/BorderColor";
const BlogCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Card className="blogCard">
        <Card.Img src={data.img} variant="top" />
        <Card.Body>
          <Card.Subtitle className="text-muted d-flex  align-items-center blogDate">
            {" "}
            <BorderColorIcon style={{ scale: "0.6" }} /> {data.date}
          </Card.Subtitle>

          <Card.Title className="my-2">{data.heading}</Card.Title>
          <Card.Text className="blogDescription my-3">
            {data.blogContent}
          </Card.Text>
          <div className="d-flex align-items-end  justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <Avatar
                alt="Profile Picture"
                src={data.profileImage}
                sx={{ width: 40, height: 40 }}
              />
              <div
                className="d-flex justify-content-center flex-column align-items-start"
                style={{ marginLeft: "0.5em" }}
              >
                <span className="profileName fw-bold">{data.profileName}</span>
                <span className="profileDesignation">
                  {data.profileDesignation}
                </span>
              </div>
            </div>

            <Card.Link className="d-flex gap-0 align-items-end blogLink">
              Read More{" "}
              <ArrowForwardIcon
                className="arrowIcon"
                style={{ rotate: "-30deg" }}
              />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default BlogCard;
