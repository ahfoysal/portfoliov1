import { css } from "styled-components";
const hexa = (hex, alpha) => {
  try {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha >= 0) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  } catch (error) {
    console.log(error.message);
    return "";
  }
};
const button = css`
  color: ${(props) => props.theme.brand.primary};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.brand.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.fontSize.sm});
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.default}
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => hexa(props.theme.brand.primary, 0.1)};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${(props) => props.theme.transitions.default};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${(props) => props.theme.brand.primary};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${(props) => props.theme.transitions.default};
    cursor: pointer;
    color: ${(props) => props.theme.brand.primary};
    &:hover,
    &:focus,
    &:active {
      color: ${(props) => props.theme.brand.primary};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${(props) => props.theme.brand.primary} !important;
        transition: ${(props) => props.theme.transitions.default};
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      top: 0.1em;
      background-color: ${(props) => props.theme.brand.primary};
      transition: ${(props) => props.theme.transitions.default};
      opacity: 0.5;
    }
  `,

  button,
  smallButton: css`
    color: ${(props) => props.theme.brand.primary};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.brand.primary};
    border-radius: ${(props) => props.theme.borderRadiusButton};
    padding: 0.50rem 0.75rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFamily.fontMono}
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.default};
    &:hover,
    &:focus,
    &:active {
      background-color: ${(props) => hexa(props.theme.brand.primary, 0.1)};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${(props) => props.theme.brand.primary};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.brand.primary};
    border-radius: ${(props) => props.theme.borderRadiusButton};
    padding: 1.25rem 1.75rem;
    font-size: ${(props) => props.theme.fontSize.sm};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.default};
    &:hover,
    &:focus,
    &:active {
      background-color: ${(props) => hexa(props.theme.brand.primary, 0.1)};
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: ${(props) => props.theme.shadows.default};
    transition: ${(props) => props.theme.transitions.default};
    &:hover,
    &:focus {
      box-shadow: ${(props) => props.theme.shadows.medium};
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${(props) => props.theme.fontSize.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${(props) => props.theme.brand.primary};
      }
    }
  `,
};

export default mixins;
