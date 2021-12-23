import React from "react";
import styled from "styled-components";
import logo from "../../assets/Logos/1.png";
import { Text } from "../../components";
import facebook from "../../assets/icons/facebook.svg";
import zalo from "../../assets/icons/zalo_sharelogo.png";

const Footer = () => {
  return (
    <>
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
        <div className="wrapper-two">
          <div className="flex-row">
            <a href="http://fuwo.vn">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="http://fuwo.vn">
              <img src={zalo} alt="zalo" />
            </a>
          </div>
          <Text>
            {" "}
            Copyright © 2021{" "}
            <span
              style={{
                color: "var(--color-main)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <a
                href="http://fuwo.vn"
                style={{
                  color: "var(--color-main)",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Fuwo
              </a>
            </span>
            . All right reserved.
          </Text>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: var(--color-main);
  width: 100%;

  .logos {
    img {
      width: 300px;
      transform: translateY(-30px);
      @media ${(props) => props.theme.breakpoints.md} {
        width: 300px;
        transform: none;
      }
      @media ${(props) => props.theme.breakpoints.sm} {
        width: 200px;
        transform: translateX(-30px);
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

  .wrapper-two {
    padding: 3rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background1);
    gap: 2rem;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: center;
    align-items: center;

    a {
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
