import React from "react";
import styled from "styled-components";
import { Text } from "..";

const Button = (props) => {
  const { text } = props;
  return (
    <Wrapper>
      <a href="https://forms.gle/Ae81v6cGJFt8Aj8p7" target="_blank">
        <Text.CaptionTitle>{text || "text"}</Text.CaptionTitle>
      </a>
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
