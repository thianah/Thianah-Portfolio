function Projects() {
  const projectsItem = [
    {
      id: "1",
      title: "React To-Do App",
      description:
        "The To-Do Application is a responsive React project that facilitates CRUD operations, pagination, search functionality, and comprehensive error handling. It seamlessly fetches data from JSONPlaceholder API, leverages React Router and Hooks, and features a clean, responsive CSS design. Deployed on Vercel, it offers an efficient and user-friendly solution for task management.",
      url: "https://my-todo-app-5sbk.vercel.app/",
    },
    {
      id: "2",
      title: "Application form",
      description:
        "The Application Form is a simple web application that allows users to fill out a form to apply to Altschool. It demonstrates the basic functionality of a form submission application.",
      url: "https://my-project-two-beryl.vercel.app/",
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

  const projects = projectsItem.map((item) => {
    return (
      <div className="project-item bg-white shadow-md rounded-lg p-6 mb-6" key={item.id}>
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
