function MyProjects() {
  return (
    <div className="pro min-h-screen font-serif bg-white font-bold text-3xl md:text-5xl flex flex-col items-center justify-center px-4 md:px-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-pink-200 focus:scale-105 focus:bg-pink-200 active:scale-105 active:bg-pink-200">
      <h1 className="text-center mb-4">VIEW MY PROJECTS</h1>
      <a href="/projects" className="text-lg md:text-xl underline">
        view
      </a>
    </div>
  );
}

export default MyProjects;