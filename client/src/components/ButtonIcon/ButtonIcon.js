import React from "react";
import styled from "styled-components";
import { Text } from "..";
import icon from "../../assets/icons/website.png";

const ButtonIcon = ({ title, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <img src={icon} alt="icon" />
      <Text.Caption color="black">{title || ""}</Text.Caption>
      <div className="bg" />
    </Wrapper>
  );
};

export default ButtonIcon;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: relative;

  padding: 10px 20px;

  align-items: center;
  transition: width 1s ease-in-out;
  transition-delay: 0.5s;
  cursor: pointer;

  .bg {
    background-color: var(--color-main);
    width: ${(props) => (props.select ? "80%" : 0)};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 0 100px 100px 0;
  }

  :hover {
    .bg {
      width: ${(props) => props.per || "80%"};
    }
    img {
      transform: scale(1.05) translateY(-5px);
    }
  }

  ${Text.Caption} {
    color: red;
  }

  img {
    width: 45px;
    height: 45px;
  }
`;
