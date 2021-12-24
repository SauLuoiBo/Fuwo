import React from "react";
import styled from "styled-components";
import { CustomCard, Text } from "../../components";
import logo1 from "../../assets/Logos/vne.png";
import logo2 from "../../assets/Logos/equest.png";
import logo3 from "../../assets/Logos/pantodo.jpeg";

const Customize = () => {
  return (
    <Wrapper id="customize">
      <div className="title-wrapper">
        <Text.Title color="black">đối tác chiến lược</Text.Title>
        <Text color="black">
          Tuy là công ty non trẻ nhưng Fuwo cũng nhận được khá nhiều sự tin
          tưởng từ các đối tác uy tín, minh chứng cho mối quan hệ hợp tác hiệu
          quả giữa Fuwo cùng các đối tác tại Việt Nam và nhiều quốc gia trên thế
          giới trong tương lai. Fuwo tự hào được kể tên một số thương hiệu nổi
          tiếng mà Fuwo đã và đang hợp tác.
        </Text>
      </div>

      <ProductWrapper>
        <CustomCard text="VTVcab" />
        <CustomCard text="VNE group" logo={logo1} />
        <CustomCard text="Equest" logo={logo2} />
        <CustomCard text="Pantado" logo={logo3} />
      </ProductWrapper>
    </Wrapper>
  );
};

export default Customize;

const Wrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title-wrapper {
    width: 100%;
    padding: 2rem 1rem;
    max-width: 800px;
    text-align: center;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 2rem 5rem;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
