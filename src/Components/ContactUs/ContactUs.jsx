import React from "react";
import "./Style/ContactUs.css";
import AboutusBorder from "../AboutUs/Components/AboutusBorder";
import ContactusBorder from "./Content/ContactusBorder";
import ContactusForm from "./Components/ContactusForm";
import ContactusMap from "./Components/ContactusMap";
import ContentContactusForm from "./Content/ContentContactusForm";

const ContactUs = () => {
  return (
   <>
      <AboutusBorder data={ContactusBorder}/>
      <ContactusForm data={ContentContactusForm}/>
      <ContactusMap/>
    </>
  );
};

export default ContactUs;
