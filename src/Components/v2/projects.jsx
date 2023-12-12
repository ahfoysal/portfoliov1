import { useEffect } from "react";
import styled from "styled-components";
import { IoMdOpen } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import data from "../../Json/Project.json";

const Projects = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Wrapper id="projects">
      <h2 className="num-heading"> Some Projects I’ve Built</h2>
      <ul className="projectss">
        {data
          .filter((pr) => pr.isFeatured)
          .map((pr) => {
            return (
              <li
                key={pr.title}
                className="mt-10 group relative  pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className=" p-4 flex flex-col md:flex-row justify-between gap-6  -inset-x-4 -inset-y-4 z-0  rounded-md transition motion-reduce:transition-none lg:-inset-x-6  lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                  <div className="project-image md:w-5/12">
                    <a href={pr?.link}>
                      <img
                        src={pr.img}
                        alt=""
                        className="rounded-md w-auto h-auto "
                      />
                    </a>
                  </div>
                  <div className="project-content md:w-7/12 ">
                    <div>
                      <div className="project-title flex justify-between">
                        <a
                          className="text-lg group-hover:text-green text-white"
                          href={pr.link}
                        >
                          {pr.title}
                        </a>
                      </div>
                      <div className="pon">
                        <p
                          dangerouslySetInnerHTML={{ __html: pr?.details }}
                        ></p>
                      </div>

                      <ul className="mt-2  gap-2 flex flex-wrap">
                        {pr.technologies.map((tech) => {
                          return (
                            <li
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                              key={tech}
                            >
                              {tech}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="flex gap-4 flex-wrap text-lg mt-6">
                        {pr.githubLink === false && (
                          <a
                            href={"##"}
                            onClick={() => alert("Source Code Private")}
                          >
                            <FiGithub className="text-2xl" />
                          </a>
                        )}
                        {pr.githubLink === true && (
                          <a href={pr?.gitLink}>
                            <FiGithub className="text-2xl" />
                          </a>
                        )}

                        <a href={pr.link}>
                          <IoMdOpen className="text-2xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </Wrapper>
  );
};

export default Projects;
const Wrapper = styled.section`
  margin: 0px auto;
  margin: 100px 0px;
  max-width: 1000px;
  .num-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: wrap;
  }
  .type:nth-of-type(2n + 1) .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    justify-content: end;
  }
  /* .num-heading::before {
    position: relative;
    bottom: 4px;
    counter-increment: section 3;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    margin-top: 15px;
    font-weight: 400;
  } */
  .num-heading::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
    margin-top: 15px;
  }
`;
