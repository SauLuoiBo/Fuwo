import React from "react";
import styled from "styled-components";
import { ProductKey, Text } from "../../components";
import logo1 from "../../assets/Logos/cus/hi3.png";

import logo3 from "../../assets/Logos/cus/hi2.png";

import logo5 from "../../assets/Logos/cus/hi1.jpeg";
import logo6 from "../../assets/Logos/cus/hi4.jpg";
import { Roll } from "react-reveal";

const data = [
  {
    title: "Schoolbus.vn",
    des: "Nền tảng học trực tuyến tương tác trực tiếp đầu tiên tại Việt Nam.",
    logo: logo1,
  },
  {
    title: "VTALENT",
    des: "Nền tảng E-learning của VTVcab",
    logo: logo3,
  },

  {
    title: "PANTADO.EDU.VN ",
    des: "Hệ thống LMS trong giáo dục.",
    logo: logo5,
  },
  {
    title: "COEDU.VN",
    des: "Nền tảng chuyển 'đổi số giáo dục ",
    logo: logo6,
  },
];

const KeyProduct = () => {
  return (
    <Wrapper className="container" id="product">
      <div className="title-wrapper">
        <Text.Title color="black">sản phẩm nổi bật</Text.Title>
      </div>
      <ProductWrapper>
        <Roll left>
          {data.map((item, index) => (
            <ProductKey
              title={item.title}
              des={item.des}
              logo={item.logo}
              key={index}
            />
          ))}
        </Roll>
      </ProductWrapper>
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

const ProductWrapper = styled.div`
  width: 100%;
  display: grid;
  margin: 2rem auto;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
