import React from "react";
import styled from "styled-components";
import { CustomCard, Text } from "../../components";
import logo1 from "../../assets/Logos/vne.png";
import logo2 from "../../assets/Logos/equest.png";
import logo3 from "../../assets/Logos/pantodo.jpeg";

const Customize = () => {
  const [pos, setPos] = React.useState(null);
  const [index, setIndex] = React.useState(18);

  React.useEffect(() => {
    const process = () => {
      let y;

      y = index - 1;
      if (y < 0) y = 18;

      setIndex(y);
      setPos(`${y * 5}rem`);
    };
    let timer = setTimeout(() => process(), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [pos, index]);

  return (
    <Wrapper id="customize">
      <div className="title-wrapper">
        <Text.Title color="black">ĐỐI TÁC CHIẾN LƯỢC</Text.Title>
        <Text color="black">
          Tuy là công ty non trẻ nhưng Fuwo cũng nhận được khá nhiều sự tin
          tưởng từ các đối tác uy tín, minh chứng cho mối quan hệ hợp tác hiệu
          quả giữa Fuwo cùng các đối tác tại Việt Nam và nhiều quốc gia trên thế
          giới trong tương lai. Fuwo tự hào được kể tên một số thương hiệu nổi
          tiếng mà Fuwo đã và đang hợp tác.
        </Text>
      </div>

      <ProductWrapper>
        <div className="content">
          <Content pos={pos}>
            <CustomCard text="VTVcab" />
            <CustomCard text="VNE group" logo={logo1} />
            <CustomCard text="Equest" logo={logo2} />
            <CustomCard text="Pantado" logo={logo3} />
            <CustomCard text="VTVcab" />
            <CustomCard text="VNE group" logo={logo1} />
            <CustomCard text="Equest" logo={logo2} />
            <CustomCard text="Pantado" logo={logo3} />
          </Content>
        </div>
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
  display: flex;
  padding: 0 30rem;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 20rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 5rem;
  }

  .content {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Content = styled.div`
  --pos: ${(props) => props.pos || 0};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  gap: 20rem;
  width: 100%;

  transform: translateX(var(--pos));
`;
