import React from "react";
import styled from "styled-components";
import bar from "../../assets/icons/bar.svg";
import x from "../../assets/icons/huhu.svg";
import fuwo from "../../assets/Logos/2.png";
import fuwo2 from "../../assets/Logos/1.png";
import { ScrollButton } from "../../components";

const data = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Tuyển dụng",
    link: "apply",
  },
  {
    name: "Dịch vụ",
    link: "service",
  },
  {
    name: "Sản phẩm",
    link: "product",
  },
  {
    name: "Đối tác",
    link: "customize",
  },
];

const Header = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <Wrapper>
        <div className="logo">
          <img src={fuwo} alt="logo" />
        </div>
        <Buttonhi onClick={() => setModal(!modal)}>
          {modal ? <img src={x} alt="bar" /> : <img src={bar} alt="x" />}
        </Buttonhi>
      </Wrapper>
      <ModalWrapper visible={modal} onClick={() => setModal(false)}>
        <div className="left">
          <img src={fuwo2} alt="logo" />
        </div>
        <div className="right">
          <div className="menu-wrapper ">
            {data.map((data, i) => {
              return (
                <ScrollButton
                  key={i}
                  onClick={() => setModal(false)}
                  text={data.name}
                  link={data.link}
                />
              );
            })}
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 2000;
  min-height: 7rem;
  display: flex;
  flex-direction: row;

  justify-content: end;
  @media ${(props) => props.theme.breakpoints.md} {
    background-color: var(--color-background1);
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    display: none;
    height: 7rem;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.5);
    }
    @media ${(props) => props.theme.breakpoints.md} {
      display: block;
    }
  }
`;

const Buttonhi = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  position: relative;
  z-index: 3000;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-background1);

  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  display: ${(props) => (props.visible ? "grid" : "none")};
  grid-template-columns: repeat(2, 1fr);
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(1, 1fr);
  }

  .left {
    width: 100%;
    height: 100%;
    background-color: var(--color-main);
    display: flex;
    align-items: flex-start;
    @media ${(props) => props.theme.breakpoints.md} {
      display: none;
    }
    img {
      width: 300px;
    }
  }
  .right {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 4000;
  }

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
