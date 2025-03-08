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
    <section className="contact-container mt-20 mb-30 bg-white text-black px-6">
      <div className="contact max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">LEAVE A MESSAGE</h2>

        <form className="space-y-4" onSubmit={sendEmail}>
          <div>
            <label className="block text-lg font-medium">Name:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 mt-2 rounded"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Email:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 mt-2 rounded"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Message:</label>
            <textarea
              className="w-full border-2 border-gray-300 p-2 mt-2 rounded"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <a
            href="https://www.instagram.com/invites/contact/?igsh=sp4yu0l4z0z4&utm_content=2hnr4rt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#E1306C" />
          </a>
          <a
            href="http://linkedin.com/in/ekundayo-christianah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#0077B5" />
          </a>
          <a
            href="https://github.com/thianah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="#000" />
          </a>
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