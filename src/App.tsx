import Hero from './components/Hero';
import Identity from './components/Identity';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Identity />
      <About />
      <Partners />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
