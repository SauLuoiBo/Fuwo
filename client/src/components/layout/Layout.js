import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../../containers";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  width: 100%;
`;
