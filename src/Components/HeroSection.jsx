import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div>
        <h1> Welcome, I&apos;m </h1>
      </div>
      <div>
        <h2 className="big-heading">AH Foysal</h2>
      </div>
      <div>
        <h3 className="big-heading2">
          I&apos;m on my way to crafting cool websites!
        </h3>
      </div>
      <div>
        <p>
          I&apos;m a web developer based in Dhaka, Bangladesh. Currently,
          specializing in creating websites with React and more.
        </p>
      </div>
      <div>
        <a href="/Resume.pdf" download className="cv-link">
          Download My Resume
        </a>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
const Wrapper = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
  h1 {
    margin: 0px 0px 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }
  .big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    line-height: 1;
  }
  .big-heading2 {
    margin: 0px;
    margin-top: 20px;
    line-height: 1;
    font-size: clamp(28px, 6vw, 70px);
  }
  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
  p {
    margin: 20px 0px 0px;
    max-width: 540px;
    font-size: 16px;
  }
  p > a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
  }
  .cv-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
  }
  p > a:hover,
  p > a:focus,
  p > a:active {
    color: var(--green);
    outline: 3px !important;
  }
  a:hover,
  a:focus {
    color: var(--green);
  }
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }
  p > a::after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 4px;
    background-color: var(--green);
    transition: var(--transition);
    opacity: 0.5;
  }

  a:hover:after {
    width: 100%;
  }
`;
