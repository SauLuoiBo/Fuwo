import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const ScrollButton = (props) => {
  const { link, text, onClick } = props;
  return (
    <LinkS
      to={link || "home"}
      activeClass="active"
      duration={500}
      spy={true}
      smooth={true}
      onClick={onClick}
    >
      {text || " text"}
    </LinkS>
  );
};

export default ScrollButton;

const LinkS = styled(Link)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 600;
  :hover {
    transform: scale(1.1);
  }

  &.active {
    color: var(--color-background2);
  }

  :hover {
    color: var(--color-background2);
  }
`;
