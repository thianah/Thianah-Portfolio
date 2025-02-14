import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b4f5ic7", // Replace with your actual service ID
        "template_1uvyqhz", // Replace with your actual template ID
        formData,
        "8hIrE3tjBes9gSKI3" // Replace with your actual Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="contact-container">
      <div className="contact">
        <h2 className="get">Get in Touch</h2>
        <p>If you'd like to work together or just want to say hi, I'd love to hear from you!</p>

        <form className="name" onSubmit={sendEmail}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />

          <label>Email:</label>
          <input
            className="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />

          <label>Leave a Message:</label>
          <textarea
            className="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Submit</button>
        </form>

        <div>
          <h3>Or, you can reach me at:</h3>
          <a
            href="https://wa.me/+2349161402448"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;