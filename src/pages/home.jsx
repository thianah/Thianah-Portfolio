import React from "react";
import image from "../assets/image.jpg";
//creating home page component= home
function Home() {
  return (
    <section className="home-container">
      <h1 className="home-title">
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
