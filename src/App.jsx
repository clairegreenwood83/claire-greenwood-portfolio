import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#748AFC]  via-[#E7DBFF] to-[#FFE1F3]">
      
      <Navigation />
      <Hero />
      <Projects />
    </div> 
  );
}

export default App;
