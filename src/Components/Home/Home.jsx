import React from "react";
import "./Style/Home.css";
import Packages from "./Components/Packages";
import Advantages from "./Components/Advantages";
import Destination from "./Components/Destination";
import Events from "./Components/Events";
import SpecialOffer from "./Components/SpecialOffer";
import Testimonial from "./Components/Testimonial";
import Newsletter from "./Components/Newsletter";
import LatestBlog from "./Components/LatestBlog";
import ContentPackages from "./Content/ContentPackages";
import ContentAdvantages from "./Content/ContentAdvantages";
import ContentDestination from "./Content/ContentDestination";
import ContentEvents from "./Content/ContentEvents";
import ContentSpecialOffer from "./Content/ContentSpecialOffer";
import ContentTestimonial from "./Content/ContentTestimonial";
import ContentNewsletter from "./Content/ContentNewsletter";
import ContentLatestBlog from "./Content/ContentLatestBlog";
const Home = () => {
  return (
    <div className="Home">
      <Packages data={ContentPackages} />
      <Advantages data={ContentAdvantages} />
      <Destination data={ContentDestination} />
      <Events data={ContentEvents} />
      <SpecialOffer data={ContentSpecialOffer} />
      <Testimonial data={ContentTestimonial} />
      <Newsletter data={ContentNewsletter} />
      <LatestBlog data={ContentLatestBlog} />
    </div>
  );
};

export default Home;
