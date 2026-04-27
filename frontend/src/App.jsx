import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import History from './components/History';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <History />
      <Advantages />
      <Process />
      <Branches />
      <Contact />
      <Footer />
    </div>
  );
}
