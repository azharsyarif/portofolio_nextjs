import Image from 'next/image';

const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills, experience, and projects. Built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      image: "/images/portfolio-preview.png", // Add image path here
      link: "https://my-portfolio.com",
    },
    {
      title: "Aplikasi Pengaduan Masyarakat",
      description:
        "Developed an e-commerce platform for a local business, including user authentication, product listings, and a shopping cart. Integrated with Stripe for payments.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/images/ecommerce-preview.png", // Add image path here
      link: "https://ecommerce-platform.com",
    },
    {
      title: "Aplikasi Kasir",
      description:
        "A web app for task management with features such as task creation, deadlines, and progress tracking. Used for project management and collaboration.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/images/taskmanager-preview.png", // Add image path here
      link: "https://taskmanager.com",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <ul className="text-left space-y-8">
            {projectData.map((project, index) => (
              <li key={index} className="p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
  
                {/* Project Details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold">Technologies Used:</h4>
                    <ul className="list-disc list-inside">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Projects;
  