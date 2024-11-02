import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <main className="relative">
      <Navbar />
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>
      <div className="relative mt-[100vh] z-10 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
        <Skills />
      </div>
      <Qualifications />
      <Work />
      <Contact />
    </main>
  );
}

export default App;