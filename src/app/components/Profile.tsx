import Image from 'next/image';
import { profileData } from '../data/data';

const Profile: React.FC = () => (
  <section>
    <Image src={profileData.photo} alt="Profile Photo" width={150} height={150} />
    <h1>{profileData.name}</h1>
    <h2>{profileData.title}</h2>
    <p>{profileData.summary}</p>
  </section>
);

export default Profile;
