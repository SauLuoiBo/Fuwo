import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../../containers";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  const TITLE = "Fuwo - Sáng tạo cho tương lai";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
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
