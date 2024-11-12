// components/Sidebar.tsx
import Image from 'next/image';
import { profileData } from '../data/data'; // Ensure profileData has details like name, photo, etc.
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <nav className="w-1/4 bg-primary text-white p-6 rounded-lg shadow-xl">
      <div className="text-center mb-6">
        {/* Profile Picture */}
        <div className="mb-4">
          <Image
            src={profileData.photo}
            alt="Profile Photo"
            width={120}
            height={120}
            className="rounded-full border-4 border-accent mx-auto"
          />
        </div>

        {/* Name and Title */}
        <h2 className="text-2xl font-bold">{profileData.name}</h2>
        <p className="text-lg text-gray-200">{profileData.title}</p>

        {/* Short Intro */}
        <p className="text-gray-300 mt-4">{profileData.summary}</p>
      </div>

      {/* Links */}
      <ul className="space-y-4">
        <li>
          <Link href="#education" className="text-xl font-semibold hover:text-accent transition-colors">
            Education
          </Link>
        </li>
        <li>
          <Link href="#experience" className="text-xl font-semibold hover:text-accent transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#skills" className="text-xl font-semibold hover:text-accent transition-colors">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="text-xl font-semibold hover:text-accent transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-xl font-semibold hover:text-accent transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
