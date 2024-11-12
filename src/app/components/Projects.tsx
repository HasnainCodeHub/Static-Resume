// components/Projects.tsx
import Link from 'next/link';
import { projectsData } from '../data/data';

const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-secondary to-accent text-white rounded-lg shadow-lg mb-4 md:mb-6 lg:mb-8"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">Projects</h2>
      {projectsData.map((project, index) => (
        <div 
          key={index} 
          className="mt-4 p-4 border-l-4 border-primary bg-gray-800 rounded-lg"
        >
          {/* Project Name */}
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            {project.name}
          </h3>

          {/* Project Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-1">
            <strong>Tech:</strong> {project.tech}
          </p>

          {/* Project Link */}
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-white underline mt-2 inline-block"
          >
            View Project
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Projects;
