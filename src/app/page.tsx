import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
      <div className="lg:flex lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
