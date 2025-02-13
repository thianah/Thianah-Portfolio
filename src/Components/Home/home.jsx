import './home.css';
import React, { useEffect, useState } from "react";
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
      <p className="me">
        Hi! I'm Ekundayo Christianah Adenike, a frontend developer with a
        passion for building scalable and efficient software systems. I'm
        currently a student at Altschool Africa. I have a well-versed skill set
        in HTML, CSS, JavaScript, React, Node.js, vue.js , designing and
        developing user interfaces, and collaborating with cross-functional
        teams to deliver high-quality products. I am eager to learn and grow as
        a developer, and I'm excited to leverage my skills to make a positive
        impact in the world.
      </p>
    </section>
  );
}

export default Home;
