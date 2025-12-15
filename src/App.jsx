import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-accent/20 selection:text-accent">
      <Hero />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 text-slate-900">
        <About />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;



