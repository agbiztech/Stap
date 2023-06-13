import React from "react";
import "./Style/ContactusForm.css";
import { Col, Row, Button, Form, Card, Collapse } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import axios from "axios";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const ContactusForm = (props) => {
  const validate = yup.object({
    firstName: yup.string().min(2).required(),
    lastName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    Phone: yup
      .string()
      .required()
      // .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    
    Message: yup.string().min(2).required(),
  });
  const user = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      Phone: "",
      Message: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      const {
        firstName,
        lastName,
        email,
        Phone,
        Message,
      } = values;
      const res = await axios({
        method: "post",
        url: "https://v1.nocodeapi.com/roshanprajapati/google_sheets/NsWWcHznpbvDIctE",
        params: { tabId: "Sheet1" },
        data: [
          [
            firstName,
            lastName,
            email,
            Phone,
            Message,
          ],
        ],
      })
        .then(function (response) {
          console.log(response.data);
          swal("Send", "Your message sent successfully!", "success")
        })
        .catch(function (error) {
          console.log(error);
          swal("Error", "All field are required", "warning");
        });
    },
  });
  return (
    <div className="ContactForm-0">
      <div className="container ContactForm-1">
        <div className="row ContactForm-1">
          <div className="col-lg-4 col-md-12 ContactForm-2 row">
            <h3 className="contactform-heading col-12">{props.data.Heading}</h3>
            <p>
             {props.data.Para}
            </p>
            <div className="row">
              <div className="col-12 ContactForm-3">
                <AddBusinessIcon  sx={{color:'#0d3b51', fontSize:'2rem', marginRight:'1rem'}}/> 
             {props.data.address}
              </div>
              <div className="col-12 ContactForm-3">
                <ContactPhoneIcon  sx={{color:'#0d3b51', fontSize:'2rem', marginRight:'1rem'}}/> {props.data.phone}
              </div>

              <div className="col-12 ContactForm-3">
                <MarkunreadIcon  sx={{color:'#0d3b51', fontSize:'2rem', marginRight:'1rem'}}/> {props.data.email}
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <Form
              method="POST"
              onSubmit={user.handleSubmit}
              className="col-12 takewidth"
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    name="firstName"
                    value={user.values.firstName}
                    onChange={user.handleChange}
                    placeholder="First Name"
                  />
                  {user.touched.firstName && user.errors.firstName && (
                    <p className="error-part">{user.errors.firstName}</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    name="lastName"
                    value={user.values.lastName}
                    onChange={user.handleChange}
                    placeholder="Last Name"
                  />
                  {user.touched.lastName && user.errors.lastName && (
                    <p className="error-part">{user.errors.lastName}</p>
                  )}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    name="email"
                    value={user.values.email}
                    onChange={user.handleChange}
                    type="email"
                    placeholder="Email"
                  />
                  {user.touched.email && user.errors.email && (
                    <p className="error-part">{user.errors.email}</p>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="Contact">
                  <Form.Control
                    name="Phone"
                    value={user.values.Phone}
                    onChange={user.handleChange}
                    placeholder="Phone"
                  />
                  {user.touched.Phone && user.errors.Phone && (
                    <p className="error-part">{user.errors.Phone}</p>
                  )}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridtext">
                <Form.Control
                  name="Message"
                  value={user.values.carddetails}
                  onChange={user.handleChange}
                  placeholder="Message"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button variant="primary" type="submit" id="galllay-button">
                Submit
              </Button>
              <br /> <br />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusForm;
