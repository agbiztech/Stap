import React from "react";
import "./Style/LatestBlog.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlogCard from "./BlogCard";
import ContentLatestBlog from "../Content/ContentLatestBlog";
import { Col, Container, Row } from "react-bootstrap";

const LatestBlog = (props) => { 
  return (
    <>
      <div className="container mb-4 d-flex justify-content-between">
        <h1>Our Latest Blog</h1>
        <button className=" blog_btn">
          see all <ArrowForwardIcon className="arrowIcon" />
        </button>
      </div>
      <Container>
        <Row className="d-sm-flex justify-content-sm-center align-items-sm-center g-3">
          {props.data.map((BlogDetails, index) => (
            <Col key={index} className="col-12 col-md-6 col-lg-4 justify-content-sm-center align-items-sm-center">
              <BlogCard data={BlogDetails} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LatestBlog;
