import React from "react";

const ContactusMap = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        "max-width": "100%",
        width: "100%",
        height: "500px",
      }}
    >
      <div
        id="display-google-map"
        style={{ height: "100%", width: "100%", "max-width": "100%" }}
      >
        <iframe
          style={{ height: "100%", width: "100%", border: 0 }}
         
          src="https://www.google.com/maps/embed/v1/place?q=Ghaziabad,+Uttar+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactusMap;
