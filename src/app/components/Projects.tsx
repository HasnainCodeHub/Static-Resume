// components/Projects.tsx
import { projectsData } from '../data/data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-6 bg-gradient-to-r from-secondary to-accent text-white rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold text-gray-900">Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="mt-4 p-4 border-l-4 border-primary bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <p className="text-lg text-gray-300">{project.description}</p>
          <p className="text-gray-300"><strong>Tech:</strong> {project.tech}</p>
          <a href={project.link} className="text-accent hover:text-white" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
