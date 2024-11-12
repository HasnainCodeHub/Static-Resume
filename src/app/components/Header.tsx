// components/Header.tsx
import Image from 'next/image';
import { profileData } from '../data/data';

const Header: React.FC = () => {
  return (
    <header 
      className="text-center p-4 md:p-8 lg:p-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg mb-4 md:mb-6 lg:mb-8"
    >
      <div className="mb-4">
        <Image
          src={profileData.photo}
          alt="Profile Photo"
          width={120}
          height={120}
          className="rounded-full border-4 border-accent mx-auto md:w-36 md:h-36 lg:w-40 lg:h-40"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white">
        {profileData.name}
      </h1>
      <h2 className="text-lg md:text-2xl lg:text-3xl text-gray-100">
        {profileData.title}
      </h2>
      <p className="text-base md:text-lg lg:text-xl mt-2 md:mt-4">
        {profileData.summary}
      </p>
    </header>
  );
};

export default Header;
