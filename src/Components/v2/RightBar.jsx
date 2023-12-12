import { useEffect, useState } from "react";
import styled from "styled-components";

const RightBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 100; // Adjust this value based on when you want the bar to appear

      setIsVisible(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Wrapper>
        <div
          className={`right-bar transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          orientation="right"
        >
          <div className="emailX">
            <a href="mailto:ahfoysal30@gmail.com">ahfoysal30@gmail.com </a>
          </div>
        </div>

        <hr />
      </Wrapper>
    </div>
  );
};

export default RightBar;
const Wrapper = styled.div`
  .right-bar {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 40px;
    z-index: 10;
    color: var(--light-slate);
  }
  .emailX {
    display: flex !important;
    flex-direction: column !important;
    -webkit-box-align: center !important;
    align-items: center !important;
    position: relative !important;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    color: var(--light-slate);
    transition-duration: 500ms;
  }
  .emailX::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
  a:hover {
    color: var(--green);
    transform: translateY(-5px);
    transition: 500ms;
  }
  @media (max-width: 1080px) {
    .right-bar {
      left: auto;
      right: 20px;
    }
  }
  @media (max-width: 768px) {
    .right-bar {
      display: none;
    }
  }
`;
