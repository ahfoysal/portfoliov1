import About from "./About";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import Projects from "./projects";
import Contact from "./Contct";
import Footer from "./Footer";
import Nav from "./navbar";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Home() {
  return (
    <>
      <Nav isHome={true} />
      <LeftBar />
      <RightBar />
      <div className="main">
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
