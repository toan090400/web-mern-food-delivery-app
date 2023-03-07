import React from "react";
import ContactPage from "../components/Contact/Contact";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
const Contact = ({ title }) => {
  document.title = `Food Delivery App - ${title}`;
  return (
    <>
      <Header link="contact" />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Contact;
