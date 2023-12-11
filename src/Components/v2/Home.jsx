import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Intro from "./Intro";
import Projects from "./projects";

const Home = () => {
  return (
    <div className="lg:flex text-slate-400 lg:justify-between lg:gap-8">
      <Intro />
      <div>
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
