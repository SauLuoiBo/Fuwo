import React from "react";
import styled from "styled-components";
import { Text } from "../../components";

const KeyProduct = () => {
  return (
    <Wrapper>
      <div className="title-wrapper">
        <Text.Title color="black">sản phẩm nổi bật</Text.Title>
      </div>
    </Wrapper>
  );
};

export default KeyProduct;

const Wrapper = styled.section`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-wrapper {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
`;
