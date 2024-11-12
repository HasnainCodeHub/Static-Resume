// components/Education.tsx
import { educationData } from '../data/data';

const Education: React.FC = () => {
  return (
    <section id="education" className="p-6 bg-gradient-to-r from-accent to-primary text-white rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold text-gray-900">Education</h2>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className={`mt-4 p-4 border-l-4 ${
            edu.school === "PIAIC" ? "border-yellow-500" : "border-accent"
          } bg-gray-800 rounded-lg`}
        >
          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
          <p className="text-lg text-gray-300">
            {edu.school} | {edu.year}
          </p>
          <p className="text-gray-300">{edu.location}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
