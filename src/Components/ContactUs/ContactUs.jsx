import React from "react";
import "./Style/ContactUs.css";
import AboutusBorder from "../AboutUs/Components/AboutusBorder";
import ContactusBorder from "./Content/ContactusBorder";
import ContactusForm from "./Components/ContactusForm";
import ContactusMap from "./Components/ContactusMap";

const ContactUs = () => {
  return (
   <>
      <AboutusBorder data={ContactusBorder}/>
      <ContactusForm />
      <ContactusMap/>
    </>
  );
};

export default ContactUs;
