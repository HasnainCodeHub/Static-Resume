import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Head from 'next/head';




const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hasnain's Resume</title>
      </Head>
      <div className="flex">
        <main className="w-3/4 p-6">
          <Header />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      <Sidebar />
      </div>
    </>
  );
};

export default Home;