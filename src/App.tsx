import Hero from './components/Hero';
import Identity from './components/Identity';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Identity />
      <About />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
