// components/Header.tsx
import Image from 'next/image';
import { profileData } from '../data/data';

const Header: React.FC = () => {
  return (
    <header className="text-center p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg mb-6">
      <div className="mb-4">
        <Image src={profileData.photo} alt="Profile Photo" width={150} height={150} className="rounded-full border-4 border-accent mx-auto"/>
      </div>
      <h1 className="text-4xl font-extrabold text-white">{profileData.name}</h1>
      <h2 className="text-2xl text-gray-100">{profileData.title}</h2>
      <p className="text-lg mt-4">{profileData.summary}</p>
    </header>
  );
};

export default Header;
