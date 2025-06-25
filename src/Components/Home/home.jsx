import React, { useEffect, useState } from "react";
import image from "../../assets/image.jpg"
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-container min-h-screen flex flex-col items-center justify-center bg-black px-4 py-8">
      <div className="home-image flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto text-center md:text-left gap-2 md:gap-8">
        <img
          src={image}
          alt="Profile"
          className="mx-auto md:mx-0 mb-5 md:mb-0 rounded-full w-40 h-45 object-cover shadow-lg"
        />
        <h1 className="home-text text-2xl mb-10 sm:text-3xl md:text-4xl font-bold text-white">
          HELLO!
          <br />
          YOU ARE WELCOME TO MY SPACE ON WEB 👋
        </h1>
      </div>
      <p className="me pt-8 text-base sm:text-lg md:text-3xl font-bold transition-transform duration-300 ease-in hover:scale-105 text-gray-200 text-center max-w-3xl mx-auto">
        Hi! I'm Ekundayo Christianah Adenike, a frontend developer with a
        passion for building scalable and efficient software systems. I'm
        currently a student at Altschool Africa. I have a well-versed skill set
        in HTML, CSS, JavaScript, React, Node.js, Vue.js, designing and
        developing user interfaces, and collaborating with cross-functional
        teams to deliver high-quality products. I am eager to learn and grow as
        a developer, and I'm excited to leverage my skills to make a positive
        impact in the world.
      </p>
    </section>
  );
}

export default Home;
