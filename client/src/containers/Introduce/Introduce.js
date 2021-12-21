import React from "react";
import styled from "styled-components";
import { Text } from "../../components";

const Introduce = () => {
  return (
    <Wrapper>
      <div className="title-wrapper">
        <Text.Title>CHÚNG TÔI LÀ FUWO</Text.Title>
      </div>
      <div className="text-wrapper">
        <Text color="var(--color-text)">
          Được ra đời và thành lập vào ngày 20/08/2019. Tại địa chỉ số: 21B6,
          Khu đô thị Green Stars, 234 Phạm Văn Đồng, Phường Cổ Nhuế 1, Quận Bắc
          Từ Liêm, Hà Nội FUWO hiện là công ty Internet và công nghệ hàng đầu,
          uy tín & năng động của Việt Nam.
        </Text>
      </div>
    </Wrapper>
  );
};

export default Introduce;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background1);
  padding: 2rem 0;

  .title-wrapper {
    text-align: center;
  }

  .text-wrapper {
    text-align: center;
    max-width: 800px;
  }
`;
