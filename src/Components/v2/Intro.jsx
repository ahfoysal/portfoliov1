import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
const Intro = () => {
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
          I'm on my way to create cool websites!
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#education">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Education
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#contact">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 ">
          {" "}
          <a href="https://github.com/ahfoysal">
            {" "}
            <FiGithub className="social-icon" />{" "}
          </a>{" "}
        </li>
        <li className="mr-5 ">
          {" "}
          <a href="https://www.instagram.com/pewwdsss_/">
            {" "}
            <FiInstagram className="social-icon" />{" "}
          </a>{" "}
        </li>
        <li className="mr-5 ">
          {" "}
          <a href="https://www.facebook.com/hosan19/">
            {" "}
            <FiFacebook className="social-icon" />{" "}
          </a>{" "}
        </li>
        <li className="mr-5 ">
          {" "}
          <a href="https://www.linkedin.com/in/ahfoysal/">
            {" "}
            <FiLinkedin className="social-icon" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Intro;
