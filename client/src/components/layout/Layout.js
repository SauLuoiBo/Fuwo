import React from "react";
import styled from "styled-components";
import { Footer } from "../../containers";

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
