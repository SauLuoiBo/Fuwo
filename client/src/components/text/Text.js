import React from "react";
import styled from "styled-components";

const Text = ({ children }) => {
  return <TextWrapper>{children}</TextWrapper>;
};

Text.Title = function TextTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export default Text;

const TextWrapper = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: white;
`;
