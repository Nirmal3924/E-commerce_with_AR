import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from "../components/Layout/Layout";
//import "./Contact.css";

const Contact = () => {
  return (
    
      <div className="contact-container">
        <div className="contact-row">
          {/* Left Side - Image */}
          <div className="contact-img">
            <img src="/images/contactus.jpeg" alt="contact us" />
          </div>

          {/* Right Side - Contact Info */}
          <div className="contact-info">
            <h1>CONTACT US</h1>
            <p>
              Any query and info about the product, feel free to call anytime.
              We are available 24x7.
            </p>
            <p>
              <BiMailSend className="icon" /> www.TryNow@ecommerceapp.com
            </p>
            <p>
              <BiPhoneCall className="icon" /> 8360428961
            </p>
            <p>
              <BiSupport className="icon" /> 1800-0000-0000 (Toll-Free)
            </p>
          </div>
        </div>
      </div>
  
  );
};

export default Contact;
