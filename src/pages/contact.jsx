import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b4f5ic7",
        "template_2fwcykj",

        {
          name: name,
          email: email,
          message: message,
        },
        "8hIrE3tjBes9gSKI3"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Failed to send message. Please try again");
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  const socialMedia = () => {};

  <br />;
  return (
    <section className="contact-container">
      <div className="contact">
        <div id="testcontact"></div>
        <h2>Get in Touch</h2>
        <p>
          If you'd like to work together or just want to say hi, I'd love to
          hear from you!
        </p>
        <br />

        <form className="name" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Email:</label>
          <input
            className="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <br />

          <label>Leave a Message:</label>
          <input
            className="message"
            type="message"
            name="message"
            value={message}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        <div>
          <h3>Or, you can reach me at:</h3>
          <a
            href="https://wa.me//+2349161402448"
            target="_blank"
            rel="noonpener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
