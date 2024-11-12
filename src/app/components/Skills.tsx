// components/Skills.tsx
import { skillsData } from '../data/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="p-6 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold text-gray-900">Skills</h2>
      <ul className="list-disc list-inside mt-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="text-lg text-gray-300 hover:text-accent transition-colors">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
