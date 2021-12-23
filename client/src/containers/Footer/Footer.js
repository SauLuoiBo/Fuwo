import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logos/Logo.svg";
import { Text } from "../../components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="logos">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-wrapper">
          <Text.Caption color="black">Liên hệ:</Text.Caption>
          <Text color="black">
            Văn phòng đại diện: Ngõ 68, Dương Đình Nghệ, Yên Hoà, Cầu Giấy, Hà
            Nội
          </Text>
          <a href="tel:0968813228">
            <Text color="black">Hotline: 096 881 3228</Text>
          </a>
          <a href="mailto:fuwocorp@gmail.com">
            <Text color="black">Email: fuwocorp@gmail.com</Text>
          </a>
          <a href="http://fuwo.vn">
            <Text color="blue">fuwo.vn</Text>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: var(--color-main);

  .logos {
    img {
      width: 150px;
      transform: translateY(6px);
      @media ${(props) => props.theme.breakpoints.md} {
        width: 300px;
      }
      @media ${(props) => props.theme.breakpoints.sm} {
        width: 200px;
      }
    }
  }
  .text-wrapper {
    width: 100%;
  }

  .wrapper {
    width: 100%;
    padding: 3rem 30rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: start;
    align-items: flex-start;

    @media ${(props) => props.theme.breakpoints.md} {
      flex-direction: column;
      padding: 3rem 20rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 3rem 5rem;
    }
  }
`;
