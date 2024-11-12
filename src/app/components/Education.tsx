// components/Education.tsx
import { educationData } from '../data/data';

const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-accent to-primary text-white rounded-lg shadow-lg mb-6 mx-4 md:mx-0 my-4 md:my-6 lg:my-8"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
        Education
      </h2>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className={`mt-4 md:mt-6 p-3 md:p-4 lg:p-6 border-l-4 ${
            edu.school === "PIAIC" ? "border-yellow-500" : "border-accent"
          } bg-gray-800 rounded-lg`}
        >
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            {edu.degree}
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-300">
            {edu.school} | {edu.year}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-300">
            {edu.location}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
