import React from "react";
import "./Style/AboutUs.css";
import AboutusBorder from "./Components/AboutusBorder";
import ContentAboutusBorder from "./Content/ContentAboutusBorder";
import Advantages from "../Home/Components/Advantages";
import ContentAdvantages from "../Home/Content/ContentAdvantages";
import ContentSpecialOffer from "../Home/Content/ContentSpecialOffer";
import ContentTestimonial from "../Home/Content/ContentTestimonial";
import ContentLatestBlog from "../Home/Content/ContentLatestBlog";
import SpecialOffer from "../Home/Components/SpecialOffer";
import Testimonial from "../Home/Components/Testimonial";
import LatestBlog from "../Home/Components/LatestBlog";
import ContentNewsletter from "../Home/Content/ContentNewsletter";
import Newsletter from "../Home/Components/Newsletter";
import AboutUsSection from "./Components/AboutUsSection";
import ContentAboutusSection from "./Content/ContentAboutUsSection";
const AboutUs = () => {
  return (
    <>
      <AboutusBorder data={ContentAboutusBorder} />
      <AboutUsSection data = {ContentAboutusSection}/>
      <Advantages data={ContentAdvantages} />
      <SpecialOffer data={ContentSpecialOffer} />
      <Testimonial data={ContentTestimonial} />
      <Newsletter data={ContentNewsletter} />
      <LatestBlog data={ContentLatestBlog} />
    </>
  );
};

export default AboutUs;
