import React from "react";
import styled from "styled-components";
import { Text } from "..";

const InforCard = (props) => {
  const { number, cap, des, color } = props;
  return (
    <Wrapper>
      <div className="round-outner">
        <div className="round-inner">
          <Text.Title color={color || `var(--color-main)`}>
            {number || "200 +"}
          </Text.Title>
        </div>
      </div>
      <div className="content">
        <Text.Caption color={color || null}>{cap || "năm"}</Text.Caption>
        <Text color={color || null}>{des || "hoat dong"}</Text>
      </div>
    </Wrapper>
  );
};

export default InforCard;

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;

  .round-outner {
    width: 250px;
    height: 250px;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: rgba(196, 196, 196, 0.33);
    @media ${(props) => props.theme.breakpoints.md} {
      width: 200px;
      height: 200px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 150px;
      height: 150px;
    }
  }

  .round-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(47, 41, 41, 0.35);
    border: 5px solid rgba(239, 192, 23, 0.51);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
`;
