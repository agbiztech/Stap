import React from "react";
// import "./Style/Footer.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import Image_1 from './Image/Footer.png';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Style/Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <MDBFooter  className="text-center text-lg-start text-muted Footer-Part">
      <img src={Image_1} className="Footer-Image"/>
      <section className="pt-2">
        
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Stap
              </h6>
              <p className="Footer-Color">
                Looking to explore the world? We can help you with 'just' what
                you've been looking for. Call/Whatsapp our travel agents to gain
                the best travel experience there is on +91-7827956056
                Call/Whatsapp our travel agents to gain the best travel
                experience there is on +91-7827956056
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Services
              </h6>
              <p>
                <p className="Footer-Color">Top Destination & Cities</p>
              </p>
              <p>
                <p className="Footer-Color">Best Tour Events</p>
              </p>
              <p>
                <p className="Footer-Color">Special Combo Offer</p>
              </p>
              <p>
                <p className="Footer-Color">Detailed Information</p>
              </p>
              <p>
                <p className="Footer-Color">Easy To Book</p>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Useful links
              </h6>
              <p>
                <a
                  onClick={() => navigate("/")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/About-Us")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/Destinations")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Destinations
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/Privacy-Policy")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/Terms&Conditions")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/Contact-Us")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Contact
              </h6>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="home" className="me-2" />
                1245K, Green Park Colony, Rampur, Roorkee – 247667 (INDIA)
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="envelope" className="me-3" />
                info@cenvs.com
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="phone" className="me-3" />{" "}
                +91-9520717737
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="print" className="me-3" />{" "}
                +91-8937991921
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      

      <div
        className="text-center p-4 border-top"
        style={{ backgroundColor: "#6c4a40", color: "white" }}
      >
        © 2023 <strong>Stap, All rights reserved</strong> : Developed by&nbsp;
        <a
          id="TextNone"
          className="text-reset fw-bold"
          href="https://agbiztech.in/"
          target="_blank"
        >
          AGBIZ
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
