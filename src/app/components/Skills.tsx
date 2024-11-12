import { skillsData } from '../data/data';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg mb-6"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">Skills</h2>
      <ul className="list-disc list-inside mt-4 text-sm sm:text-base md:text-lg">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 hover:text-accent transition-colors"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
