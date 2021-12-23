import React from "react";
import styled from "styled-components";
import bar from "../../assets/icons/bar.svg";

const Header = () => {
  return (
    <Wrapper>
      <Buttonhi>
        <img src={bar} alt="bar" />
      </Buttonhi>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 2000;
`;

const Buttonhi = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-background1);

  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
