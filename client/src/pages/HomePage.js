import React, { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Category from "./pages/Category";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xqaqkavw"); // Added reset function from useForm
  const hasShownToastRef = useRef(false); // Track if toast has been shown

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    hasShownToastRef.current = false; // Reset toast flag before submission

    try {
      const result = await handleSubmit(event);
      console.log("Formspree response:", result); // Debug log to inspect response

      // Check if there are errors in the response
      if (result && result.errors && result.errors.length > 0) {
        throw new Error(result.errors[0]?.message || "Submission failed");
      }

      // If submission succeeded and no errors, show success toast
      if (state.succeeded) {
        if (!hasShownToastRef.current) {
          hasShownToastRef.current = true;
          toast.success("Thanks for your message!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Reset form fields and state
          document.getElementById("contact-form").reset();
          reset(); // Reset Formspree state to clear succeeded/errors
        }
      } else {
        throw new Error("Submission did not succeed");
      }
    } catch (error) {
      console.error("Form submission error:", error); // Debug log for errors
      if (!hasShownToastRef.current) {
        hasShownToastRef.current = true;
        toast.error(error.message || "Failed to submit the form. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  // Reset the toast flag when a new submission starts
  useEffect(() => {
    if (state.submitting) {
      hasShownToastRef.current = false;
    }
  }, [state.submitting]);

  return (
    <form id="contact-form" onSubmit={onSubmit} className="contact-form">
      <div className="contact-form-field">
        <label htmlFor="name" className="contact-form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="contact-form-input"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="contact-form-error"
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="email" className="contact-form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="contact-form-input"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="contact-form-error"
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="message" className="contact-form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-form-textarea"
          rows="4"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="contact-form-error"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="contact-form-button"
      >
        Submit
      </button>
    </form>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleBrowseShop = () => {
    navigate("/category"); // This will redirect to Category.js if the route is set up correctly
  };

  return (
    <>
      <ToastContainer />
      <Carousel style={{ height: "85vh" }}>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/hero-furniture.jpg"
              alt="First slide"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>Big Savings Await!</h1>
              <p>Discover Unbeatable Deals on Furniture</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/lamp.jpg"
              alt="Second slide"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
              <h1>Explore Exclusive Sofa</h1>
              <p>Luxury Comfort at Affordable Prices</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src="/images/new_bed.jpg"
              alt="Third slide"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="carousel-text">
             
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          <div className="category-box">
            <img
              className="category-image"
              src="/images/bed_1.jpg"
              alt="Lamps"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Beds</p>
            </div>
          </div>
          <div className="category-box">
            <img
              className="category-image"
              src="/images/n_sofa.jpg"
              alt="Armchairs"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Sofa's</p>
            </div>
          </div>
          <div className="category-box">
            <img
              className="category-image"
              src="/images/cabinet.jpg"
              alt="Tables"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Tables</p>
            </div>
          </div>
          <div className="category-box">
            <img
              className="category-image"
              src="/images/etienne-girardet-NGb91VwnOWY-unsplash.jpg"
              alt="Sofas"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
            <div className="category-text">
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Lamps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="trending-section">
        <div className="trending-header">
          <h2>Trending Now</h2>
          <button className="browse-shop" onClick={handleBrowseShop}>
            Browse Shop <span>»</span>
          </button>
        </div>
        <div className="trending-grid">
          <div className="trending-item">
            <img src="/images/new_sofa.jpg" alt="Modern Sofa" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Modern Sofa</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₹6597</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/n_chair.jpg" alt="Modern Chair" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Modern Chair</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₹2900 <span className="original-price">$95.00</span></p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/dinning.jpg" alt="Coffee Table" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Coffee Table</p>
              <div className="trending-rating">★★★★★</div>
              <p className="trending-price">₹3500 <span className="original-price">$85.00</span></p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          <div className="trending-item">
            <img src="/images/table2.jpg" alt="Tallest Chair" className="trending-image" />
            <div className="trending-details">
              <p className="trending-title">Tallest Chair</p>
              <div className="trending-rating">★★★★☆</div>
              <p className="trending-price">₹3900 <span className="original-price">$110.00</span></p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;