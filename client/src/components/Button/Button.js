import React from "react";
import styled from "styled-components";
import { Text } from "..";

const Button = (props) => {
  const { text } = props;
  return (
    <Wrapper>
      <Text.CaptionTitle>{text || "text"}</Text.CaptionTitle>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  width: fit-content;
  padding: 2rem 3rem;
  background-color: var(--color-main);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.05) translateY(-3px);
  }
`;
