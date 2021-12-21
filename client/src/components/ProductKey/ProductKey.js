import React from "react";
import styled from "styled-components";
import { Text } from "..";
import icon from "../../assets/Logos/shoolbus.svg";

const ProductKey = (props) => {
  const { logo, title, des } = props;
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img src={logo || icon} alt="logo" />
      </div>
      <div className="text-wrapper">
        <Text.Caption color="black">{title || "title"}</Text.Caption>
        <Text color="black">{des || "des"}</Text>
      </div>
    </Wrapper>
  );
};

export default ProductKey;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;

  .img-wrapper {
    width: fit-content;
    height: fit-content;

    img {
      width: 150px;

      @media ${(props) => props.theme.breakpoints.md} {
        width: 100px;
      }
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;
