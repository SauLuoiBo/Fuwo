import React from "react";
import styled from "styled-components";

const View = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

View.Chil1 = function ViewChil1({ children, ...restProps }) {
  return <Chil {...restProps}>{children}</Chil>;
};

export default View;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Chil = styled.div`
  width: 100%;
  height: fit-content;
  display: block;
`;
