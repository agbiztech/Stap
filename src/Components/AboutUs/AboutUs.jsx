import React from "react";
import "./Style/AboutUs.css";
import AboutusBorder from "./Components/AboutusBorder";
import ContentAboutusBorder from "./Content/ContentAboutusBorder";
import Advantages from "../Home/Components/Advantages";
import ContentTestimonial from "../Home/Content/ContentTestimonial";
import ContentLatestBlog from "../Home/Content/ContentLatestBlog";
import SpecialOffer from "../Home/Components/SpecialOffer";
import Testimonial from "../Home/Components/Testimonial";
import LatestBlog from "../Home/Components/LatestBlog";
import ContentNewsletter from "../Home/Content/ContentNewsletter";
import Newsletter from "../Home/Components/Newsletter";
import MoreAboutus from "./Components/MoreAboutus";
import ContentMoreAboutus from './Content/ContentMoreAboutus'
import ContentAboutusAdvantages from "./Content/ContentAboutusAdvantages";
import ContentAboutusSpecialoffer from "./Content/ContentAboutusSpecialoffers";
import ContentAboutusTestimonials from "./Content/ContentAboutusTestimonials";
import ContentAboutusNewsletter from "./Content/ContentAboutusNewsletter";
import ContentAboutusLatestblog from "./Content/ContentAboutusLatestblog";
const AboutUs = () => {
  return (
    <>
      <AboutusBorder data={ContentAboutusBorder} />
      <MoreAboutus data={ContentMoreAboutus}/>
      <Advantages data={ContentAboutusAdvantages} />
      <SpecialOffer data={ContentAboutusSpecialoffer} />
      <Testimonial data={ContentAboutusTestimonials} />
      <Newsletter data={ContentAboutusNewsletter} />
      <LatestBlog data={ContentAboutusLatestblog} />
    </>
  );
};

export default AboutUs;
