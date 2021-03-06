import React from "react";
import styled from "styled-components";
import { Text } from "../../components";
import Logo from "../../assets/Logos/LogoTong.svg";
import LogoLeft from "../../assets/Logos/1.png";
import Fade from "react-reveal";

const LanddingPage = () => {
  return (
    <Wrapper className="container" id="home">
      <Fade left>
        <div className="logo-left">
          <img src={LogoLeft} alt="Logo" />
          {/* <Text.Caption color="black"> Hotline: 096 881 3228</Text.Caption> */}
        </div>
      </Fade>
      <Fade top>
        <img src={Logo} alt="Logo" className="logo-brand" />
      </Fade>
      <div className="text-wrapper ">
        <Text.Title color="black">Future of the world</Text.Title>
        <Text.Caption>
          Nghiên cứu và phát triển công nghệ để kiến tạo một thế giới, một tương
          lai tốt đẹp hơn
        </Text.Caption>
      </div>
    </Wrapper>
  );
};

export default LanddingPage;

const Wrapper = styled.div`
  background-color: #f8af2b;
  width: 100%;
  overflow: hidden;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  @media ${(props) => props.theme.breakpoints.md} {
    height: fit-content;
  }

  .text-wrapper {
    transform: translateY(-30px);
    @media ${(props) => props.theme.breakpoints.md} {
      transform: none;
      margin: 2rem 0;
    }
  }

  .logo-brand {
    transform: translateY(-50px);
    width: 100%;
    height: 400px;

    @media ${(props) => props.theme.breakpoints.lg} {
      transform: none;
      height: 350px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      transform: none;
      height: 300px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      transform: none;
      height: 250px;
    }
  }

  .logo-left {
    position: absolute;
    top: 50px;
    left: 0px;
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.lg} {
      display: none;
    }
    img {
      width: 100%;
    }
  }
`;
