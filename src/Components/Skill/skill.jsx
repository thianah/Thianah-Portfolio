const ServicesGrid = () => {
  const services = [
    "REACT",
    "NODEJS",
    "CSS",
    "HTML",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "VUEJS",
  ];

  return (
    <div className="of min-h-screen font-serif bg-white font-bold text-3xl md:text-5xl flex flex-col items-center justify-center px-4 md:px-6 rounded-xl transition-transform duration-300 ">
      <h1 className="text-4xl font-bold mt-40 mb-10 text-center">MY SKILLS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center p-6 sm:p-8 md:p-10 text-lg sm:text-xl md:text-2xl font-semibold bg-gray-400 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-pink-200 focus:scale-105 focus:bg-pink-200 active:scale-105 active:bg-pink-200"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
// -h-screen flex flex-col items-center justify-center bg-white text-black px-6