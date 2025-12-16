import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

const App = () => {
  return (
    <div className="relative min-h-screen font-sans text-slate-100 selection:bg-accent/20 selection:text-accent">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(100,255,218,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_40%),#050912]" />
      <Hero />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-32 px-6 pb-20 text-slate-100">
        <About />
        <Timeline />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;



