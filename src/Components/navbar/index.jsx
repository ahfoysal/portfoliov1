import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { LOADER_DELAY, MenuLinks } from "../../lib/constants";
import { useScrollDirection } from "../../hooks";
import { StyledHeader, StyledNav, StyledLinks } from "./styles";
import Menu from "../Menu";

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const timeout = isHome ? LOADER_DELAY : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  //   const handleClickResume = () => {
  //     if (IS_PRODUCTION) {
  //       gtag.event({
  //         action: 'click_resume',
  //         category: 'resume',
  //         label: 'user clicked on resume button',
  //       });
  //     }
  //     window.open('/resume.pdf', '_blank');
  //   };

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div className="logo" tabIndex="-1">
                {isHome ? (
                  <a href="/" aria-label="home">
                    {/* <IconLogo width={36.581} height={50.186} /> */}
                    AH FOYSAL
                  </a>
                ) : (
                  <a href="/" aria-label="home">
                    {/* <IconLogo />  */} AH FOYSAL
                  </a>
                )}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                MenuLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={name}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={url}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <a data-scroll href={url}>
                        {name}
                      </a>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${isHome ? 4 : 0}ms` }}>
                  <a className="resume-button">Resume</a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
