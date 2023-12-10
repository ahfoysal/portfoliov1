import About from "./About";
import HeroSection from "./HeroSection";
// import Experience from "./Experience";
import Projects from "./projects";
import Contact from "./Contct";
import Footer from "./Footer";

function Home() {
  return (
    <div className="main">
      <HeroSection />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
