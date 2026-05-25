import RightBar from "./RightBar";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./projects";

const Home = () => {
  return (
    <div className="lg:flex text-slate-400 lg:justify-between lg:gap-8">
      <Intro />
      <div>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
