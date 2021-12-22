import React from "react";
import styled from "styled-components";
import { ProductKey, Text } from "../../components";
import logo1 from "../../assets/Logos/VTVCab_Schoolbus.png";
import logo2 from "../../assets/Logos/Mega Shool.svg";
import logo3 from "../../assets/Logos/VTALENT@2x.svg";
import logo4 from "../../assets/Logos/ecostudy.png";
import logo5 from "../../assets/Logos/pantago.png";
import logo6 from "../../assets/Logos/Logo.svg";

const data = [
  {
    title: "Shoolbus.vn",
    des: "Nền tảng học trực tuyến tương tác trực tiếp đầu tiên tại Việt Nam.",
    logo: logo1,
  },
  {
    title: "MEGASCHOOL EDU",
    des: "Nền tảng E-learning của VTVcab",
    logo: logo2,
  },
  {
    title: "VTALENT",
    des: "Nền tảng E-learning của VTVcab",
    logo: logo3,
  },
  {
    title: "ECOSTUDY.EDU.VN",
    des: "Hệ thống quản lý dành cho tổ chức giáo dục và trường học.",
    logo: logo4,
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
    <Wrapper className="container">
      <div className="title-wrapper">
        <Text.Title color="black">sản phẩm nổi bật</Text.Title>
      </div>
      <ProductWrapper>
        {data.map((item, index) => (
          <ProductKey
            title={item.title}
            des={item.des}
            logo={item.logo}
            key={index}
          />
        ))}
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
