import React, { useEffect, useState } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-container h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <div className="home-image h-screen text-center transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 active:-translate-y-1 active:scale-110">
        <h1 className="home-text pt-12 text-4xl  font-bold text-green-950">
          HELLO!
          <br />
          YOU ARE WELCOME TO MY SPACE ON WEB 👋
        </h1>
      </div>
      <p className="me pt-12 text-2xl font-bold text-black-500 text-center mt-8">
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
