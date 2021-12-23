import React from "react";
import styled from "styled-components";
import { Footer, Modal } from "../../containers";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  width: 100%;
`;

const Button = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background1);
  z-index: 2000;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
