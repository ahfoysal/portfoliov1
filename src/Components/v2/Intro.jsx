/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { saveAs } from "file-saver";

const Intro = () => {
  const [activeSection, setActiveSection] = useState("about");
  const sections = [
    { name: "About", url: "#about" },
    { name: "Education", url: "#education" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section whose offset is just above the scroll position
      const active = sections.find((section) => {
        const targetSection = document.getElementById(
          section.name.toLowerCase()
        );
        if (targetSection) {
          const { offsetTop, offsetHeight } = targetSection;

          return (
            scrollPosition >= offsetTop - 60 &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (active) {
        setActiveSection(active.name.toLowerCase());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    const targetSection = document.getElementById(section.toLowerCase());
    if (targetSection) {
      const { offsetTop } = targetSection;
      window.scrollTo({
        top: offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Abu Hossain Foysal
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          MERN Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I'm on my way to create some cool websites!
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {sections.map((section) => (
              <li key={section.name.toLowerCase()}>
                <a
                  className={`group flex items-center py-3 ${
                    activeSection.toLowerCase() === section.name.toLowerCase()
                      ? "active text-white"
                      : "text-slate-500"
                  }`}
                  href={section.url}
                  onClick={() => handleLinkClick(section.name.toLowerCase())}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {section.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex flex-col items-start">
        <button
          onClick={() => saveAs("/AhFoysal_Resume.pdf")}
          className="btn group text-green hover:bg-green-tint bg-transparent border  border-green
        rounded-xl py-2 px-4 flex gap-2 justify-center items-center text-lg w-fit ml-2
        "
        >
          <span>See Resume</span>{" "}
          <FiArrowRight className=" shrink-0 -translate-y-px transition-transform mt-2 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </button>
        <ul className="ml-1 mt-8 flex text-2xl items-center ">
          <li className="mr-5 hover:text-green ">
            {" "}
            <a href="https://github.com/ahfoysal">
              {" "}
              <FiGithub className="social-icon" />{" "}
            </a>{" "}
          </li>
          <li className="mr-5  hover:text-green">
            {" "}
            <a href="https://www.instagram.com/pewwdsss_/">
              {" "}
              <FiInstagram className="social-icon" />{" "}
            </a>{" "}
          </li>
          <li className="mr-5 hover:text-green">
            {" "}
            <a href="https://www.facebook.com/hosan19/">
              {" "}
              <FiFacebook className="social-icon" />{" "}
            </a>{" "}
          </li>
          <li className="mr-5  hover:text-green">
            {" "}
            <a href="https://www.linkedin.com/in/ahfoysal/">
              {" "}
              <FiLinkedin className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Intro;
