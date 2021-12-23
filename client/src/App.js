import styled from "styled-components";
import Layout from "./components/layout/Layout";
import {
  LanddingPage,
  History,
  Product,
  Introduce,
  Apply,
  KeyProduct,
  Customize,
  Modal,
} from "./containers";
import Theme from "./styles/Theme";
import React from "react";
import x from "./assets/icons/huhu.svg";
import bar from "./assets/icons/bar.svg";

function App() {
  const [modal, setModal] = React.useState(false);
  return (
    <Theme>
      <Layout>
        {modal && (
          <Button onClick={() => setModal(!modal)}>
            {" "}
            <img src={x} alt="button" />
          </Button>
        )}
        {!modal && (
          <Button onClick={() => setModal(!modal)}>
            {" "}
            <img src={bar} alt="button" />
          </Button>
        )}
        {/* {modal ? <Modal onClick={() => setModal(false)} /> : null} */}
        <LanddingPage />
        <History />
        <Product />
        <Introduce />
        <KeyProduct />
        <Apply />
        <Customize />
      </Layout>
    </Theme>
  );
}

export default App;

const Button = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background1);
  z-index: 2000;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
