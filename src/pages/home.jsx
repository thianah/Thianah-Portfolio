import React, { useEffect, useState } from "react";
import image from "../assets/image.jpg";
//creating home page component= home
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-container">
      <h1 className={`home-title ${isVisible ? "visible" : ""}`}>
        {" "}
        HELLO!
        <br />
        YOU ARE WELCOME TO MY SPACE ON WEB 👋
      </h1>
      <img className="myimage" src={image} alt="My Portfolio image"></img>
    </section>
  );
}

export default Home;
