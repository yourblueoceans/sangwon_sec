import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] font-sans text-slate-200 selection:bg-accent/20 selection:text-accent">
      <Hero />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;



