import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logos/1.png";
import { ScrollButton } from "../../components";

const Modal = (props) => {
  const { onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <ScrollButton text="adsasd" onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: fixed;
  z-index: 1000;
  .left {
    background-color: var(--color-main);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 300px;
    }
  }

  .right {
    background-color: white;
  }
`;
