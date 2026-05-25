import { useState } from "react";
import styled from "styled-components";
import data from "../../Json/Experience.json";

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = data[active];

  return (
    <Wrapper id="experience">
      <h2 className="num-heading">Where I've Worked</h2>
      <div className="inner">
        <ul className="tittles">
          {data.map((item, i) => (
            <li key={item.name} className="nav-item">
              <button
                className={`tab-btn ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="job-data">
          <div className="job-single">
            <h3>
              {job.position}
              <span> @ {job.name}</span>
            </h3>
            <p className="duration">{job.duration} · {job.type}</p>
            <ul>
              {job.info.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.section`
  max-width: 700px;
  margin-bottom: 100px;

  .num-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
  }
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
  .inner {
    display: flex;
  }
  .tittles {
    flex-direction: column;
    position: relative;
    z-index: 3;
    width: max-content;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .tab-btn {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--tab-height);
    padding: 0px 20px 2px;
    border-left: 2px solid var(--lightest-navy);
    background-color: transparent;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    transition: var(--transition);
    border-right: none;
    border-top: none;
    border-bottom: none;
  }
  .tab-btn:hover {
    background-color: var(--light-navy);
    color: var(--green);
  }
  .tab-btn.active {
    color: var(--green);
    border-left-color: var(--green);
    background-color: var(--light-navy);
  }
  .job-data {
    position: relative;
    width: 100%;
    margin-left: 20px;
  }
  .job-single {
    width: 100%;
    height: auto;
    padding: 0px 30px;
  }
  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;
  }
  span {
    color: var(--green);
  }
  .duration {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
  }
  ul li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
  }
  ul li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--green);
  }
  @media (max-width: 768px) {
    .inner {
      flex-direction: column;
    }
    .tittles {
      flex-flow: row wrap;
      display: flex;
      overflow-x: auto;
      width: calc(100% + 100px);
      padding-left: 30px;
      margin-left: -30px;
      margin-bottom: 20px;
    }
    .tab-btn {
      border-bottom: 2px solid var(--lightest-navy);
      border-left: none;
    }
    .tab-btn.active {
      border-bottom-color: var(--green);
      border-left: none;
    }
    .job-data {
      margin-left: 0;
    }
    .job-single {
      padding: 0;
    }
  }
`;
