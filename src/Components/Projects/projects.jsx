import './projects.css';

function Projects() {
  const projectsItem = [
    {
      id: "1",
      title: "React To-Do App",
      description:
        "The To-Do Application is a responsive React project that facilitates CRUD operations, pignation, search functionality, and comprehensive error handling. it seamlessy fetches data from JSONPlaceholder API, leverages React Router and Hooks, and feature a clean, responsive CSS design. Deployed on Vercel, it offers an efficient and user-friendly solution for task management",
      url: "https://my-todo-app-5sbk.vercel.app/",
    },

    {
      id: "2",
      title: "Application form",
      description:
        "The  Application Form is simple web application that allows users to fill out a form to apply Altschool. It desmonstrates the basic functionality of a form submission application.",
      url: " https://my-project-two-beryl.vercel.app/",
    },

    {
      id: "3",
      title: "Portfolio",
      description:
        "This is a responsive portfolio website that showcases my projects, skills, and contact information. It is built with React, CSS, and EmailJS for the contact form.",
        url: "https://thianah-portfolio.vercel.app/",
    },
  ];

  const projects = projectsItem.map((item) => {
    return (
      <div className="todo" key={item.id}>
        <div id="projects"></div>
        <h2 className="projecttitle">{item.title}</h2>
        <p>{item.description}</p>
        <a className="link" href={item.url}>
          {" "}
          {item.url}{" "}
        </a>
      </div>
    );
  });

  return (
    <section className="projects-container">
      <h1 className="projecttitle">MY PROJECTS</h1>
      {projects}
    </section>
  );
}

export default Projects;
