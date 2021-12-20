import React from "react";
import styled from "styled-components";
import { InforCard } from "../../components";
import bg from "../../assets/background/snum.jpeg";

const History = () => {
  return (
    <Wrapper>
      <Content>
        <InforCard number="3+" cap="Năm" des="hoạt động và phát triển" />
        <InforCard number="100+" cap="Nhân sự" des="giàu kinh nghiệm" />
        <InforCard number="10+" cap="Dự án" des="về nhiều lĩnh vực" />
        <InforCard number="4" cap="Nhóm" des="sản phẩm chủ lực" />
      </Content>
    </Wrapper>
  );
};

export default History;

const Wrapper = styled.section`
  display: block;
  background: url(${bg});
  width: 100%;
  padding: 5rem 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;
