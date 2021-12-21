import React from "react";
import styled from "styled-components";

const Text = ({ children, ...restProps }) => {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Text.Title = function TextTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Text.Caption = function TextCaption({ children, ...restProps }) {
  return <Caption {...restProps}>{children}</Caption>;
};

Text.CaptionTitle = function TextCaptionTitle({ children, ...restProps }) {
  return <CaptionTitle {...restProps}>{children}</CaptionTitle>;
};

export default Text;

const TextWrapper = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color || "white"};
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: ${(props) => props.color || "white"};

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 50px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 34px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
  }
`;

const Caption = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.color || "white"};
  text-transform: uppercase;
`;

const CaptionTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.color || "white"};
  text-transform: uppercase;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 34px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 25px;
  }
`;
