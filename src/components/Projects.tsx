interface Project {
  subTitle: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

interface ProjectsProps {
  title: string;
  projects: Project[];
}

const Projects = ({ title, projects }: ProjectsProps) => {
  return (
    <section id="projects" className="p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-base-300 p-4 rounded-lg">
              <img src={project.image} alt={project.subTitle} className="object-cover w-full h-48 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.subTitle}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="badge badge-secondary">{skill}</div>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;