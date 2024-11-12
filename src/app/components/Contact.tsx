// components/Contact.tsx
import { profileData } from '../data/data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-6 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-900">Contact</h2>
      <ul className="mt-4">
        <li className="text-lg text-gray-300">Email: {profileData.contact.email}</li>
        <li className="text-lg text-gray-300">Phone: {profileData.contact.phone}</li>
        <li className="text-lg text-gray-300">LinkedIn: <a href={profileData.contact.linkedin} className="text-accent hover:text-white" target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></li>
        <li className="text-lg text-gray-300">GitHub: <a href={profileData.contact.github} className="text-accent hover:text-white" target="_blank" rel="noopener noreferrer">Visit GitHub</a></li>
      </ul>
    </section>
  );
};

export default Contact;
