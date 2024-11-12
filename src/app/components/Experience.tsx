// components/Experience.tsx
import { experienceData } from '../data/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-6 bg-gradient-to-r from-secondary to-primary text-white rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold text-gray-900">Experience</h2>
      {experienceData.map((exp, index) => (
        <div key={index} className="mt-4 p-4 border-l-4 border-accent bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold text-white">{exp.role} at {exp.company}</h3>
          <p className="text-lg text-gray-300">{exp.duration} | {exp.location}</p>
          <p className="text-gray-300">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
