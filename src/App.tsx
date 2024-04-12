import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Technology from "./components/technology";

function App() {
  return (
  <div 
    className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    
    {/* 2 below divs make the whole screen black. by using flixed, h-full w-full, absolute*/}
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    
    {/* the content of the app starts here */}
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Experience />
      <Projects />
      <Contact />
    </div>
  
  </div>
  );
}

export default App;
