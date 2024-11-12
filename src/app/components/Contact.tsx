// components/Contact.tsx
import { profileData } from '../data/data';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="p-4 md:p-6 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg mx-4 md:mx-0 my-4 md:my-6 lg:my-8"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">Contact</h2>
      <ul className="mt-4 space-y-2 md:space-y-4">
        <li className="text-base md:text-lg lg:text-xl text-gray-300">
          <span className="font-semibold">Email:</span> {profileData.contact.email}
        </li>
        <li className="text-base md:text-lg lg:text-xl text-gray-300">
          <span className="font-semibold">Phone:</span> {profileData.contact.phone}
        </li>
        <li className="text-base md:text-lg lg:text-xl text-gray-300">
          <span className="font-semibold">LinkedIn:</span> 
          <Link 
            href={profileData.contact.linkedin} 
            passHref
            className="text-purple-600 hover:text-white ml-2"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit LinkedIn
          </Link>
        </li>
        <li className="text-base md:text-lg lg:text-xl text-gray-300">
          <span className="font-semibold">GitHub:</span> 
          <Link 
            href={profileData.contact.github} 
            passHref
            className="text-purple-600 hover:text-white ml-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit GitHub
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
