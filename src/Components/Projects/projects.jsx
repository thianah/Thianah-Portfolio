function Projects() {
  const projectsItem = [
    {
      id: "1",
      title: "E-commerce website",
      description:
        "This is a responsive e-commerce website that allows users to browse and purchase products. It is built with React, javaacript,  tailwindCSS.",
      url: "https://tstore2.netlify.app/",
    },
    
    {
      id: "1",
      title: "React To-Do App",
      description:
        "The To-Do Application is a responsive React project that facilitates CRUD operations, pagination, search functionality, and comprehensive error handling. It seamlessly fetches data from JSONPlaceholder API, leverages React Router and Hooks, and features a clean, responsive CSS design. Deployed on Vercel, it offers an efficient and user-friendly solution for task management.",
      url: "https://my-todo-app-5sbk.vercel.app/",
    },
    {
      id: "2",
      title: "Weather App",
      description: "Tee Cast is a sleek and user-friendly weather app that allows you to search for any location and get real-time weather updates. With accurate forecasts, temperature details, and weather conditions. 🌤️🌍",
        
      url: "https://tee-cast.vercel.app/",
    },
    {
      id: "3",
      title: "Portfolio",
      description:
        "This is a responsive portfolio website that showcases my projects, skills, and contact information. It is built with React, CSS, and EmailJS for the contact form.",
      url: "https://thianah-portfolio.vercel.app/",
    },
    {
      id: "4",
      title: "Quote app",
      description:
        "The Quote App is a simple web application that displays random quotes from an API. It features a clean, responsive design and a button that allows users to generate new quotes.",
      url: "https://t-quote.vercel.app/",
    },
  ];

  const projectsItem2 = [
    {
      id: "1",
      title: "Open source",
      description:
        "Contributed to various open-source projects, enhancing functionality and fixing bugs. Collaborated with developers worldwide to improve code quality and user experience.",
          url: "https://github.com/ianshulx/React-projects-for-beginners/pull/176, https://github.com/ianshulx/React-projects-for-beginners/pull/178",

    },
  ]
  const allProjects = [...projectsItem, ...projectsItem2];
const projects = allProjects.map((item) => {
    

    return (
      <div className="project-item bg-white shadow-md duration-500  transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg p-6 mb-6" key={item.id}>
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <a className="text-blue-500 hover:underline" href={item.url} target="_blank" rel="noopener noreferrer">
          {item.url}
        </a>
      </div>

    );
  });

  return (
    <section className="projects-container bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">MY PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects}
        </div>
      </div>
    </section>
  );
}

export default Projects;
