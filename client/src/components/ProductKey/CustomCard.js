import React from "react";
import styled from "styled-components";
import { Text } from "..";
import Logo from "../../assets/Logos/VTVCab_Schoolbus.png";

const CustomCard = (props) => {
  const { text, logo } = props;
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img src={logo || Logo} alt="logo" />
      </div>
      <div className="text-wrapper">
        <Text.Caption color="black">{text || "text"}</Text.Caption>
      </div>
    </Wrapper>
  );
};

export default CustomCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 160px;
  width: fit-content;
  height: fit-content;

  img {
    width: 150px;

    @media ${(props) => props.theme.breakpoints.md} {
      width: 100px;
    }
  }

  .text-wrapper {
  }
`;
