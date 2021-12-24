import React from "react";
import styled from "styled-components";
import { ButtonIcon, Text, View } from "../../components";
import icon1 from "../../assets/icons/app.png";
import icon2 from "../../assets/icons/icons8-ai-256.png";

import image1 from "../../assets/images/laptop-1563335546.png";
import image2 from "../../assets/images/qly-tai-chinh-1563177459.png";
import image3 from "../../assets/images/lms-1563177459.png";

const Item = (props) => {
  const { icon, text } = props;
  return (
    <ImgWrapper>
      <img src={icon || image1} alt="ads" />
      <div className="text-wrapper">
        <Text>{text || "text"}</Text>
      </div>
    </ImgWrapper>
  );
};

const data = [
  {
    img: image1,
    text: "Thiết kế, quản trị và SEO website; Xây dựng, phát triển phần mềm, Game Mobile, PC... cho doanh nghiệp, cá nhân, cửa hàng; Nghiên cứu và phát triển Blockchain, AI cho doanh nghiệp; Thu thập và phân tích dữ liệu bằng công nghệ AI cho doanh nghiệp   ",
  },
  {
    img: image2,
    text: "Cung cấp nhân lực công nghệ thông tin, nguồn nhân lực làm việc trong các doanh nghiệp viễn thông, doanh nghiệp công nghiệp công nghệ thông tin; nhân lực cho ứng dụng công nghệ thông tin; nhân lực cho đào tạo công nghệ thông tin, điện tử, viễn thông. ",
  },
  {
    img: image3,
    text: "Phát triển nguồn nhân lực, bổ sung kỹ năng, cải thiện chuyên môn, tay nghề cho nhân lực công nghệ, đảm bảo chất lượng đội ngũ đồng đều, thuận tiện cho quản lý và phát triển doanh nghiệp.  ",
  },
];

const Product = () => {
  const [select, setSelect] = React.useState(1);

  const [pos, setPos] = React.useState(`0`);

  const setPosition = (input) => {
    setPos(`-${input}rem`);
  };
  const Seclect = (index) => {
    let y;
    setSelect(index);
    y = (index - 1) * 60;
    setPosition(y);
    console.log(pos);
  };
  return (
    <section id="service">
      <View>
        <View.Chil1>
          <ImageProduct>
            <div
              style={{
                height: "600px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "30rem",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingTop: "10rem",
              }}
            >
              <WrapperImg pos={pos}>
                {data.map((data, i) => {
                  return <Item key={i} icon={data.img} text={data.text} />;
                })}
              </WrapperImg>
            </div>
          </ImageProduct>
        </View.Chil1>
        <View.Chil2>
          <ContentWrapper>
            <div className="text-wrapper">
              <Text.Title color="black">Sản phẩm</Text.Title>
              <Text color="black">
                Bằng việc áp dụng công nghệ lõi là Trí tuệ nhân tạo (AI),
                Blockchain, Công nghệ thực tế ảo, thực tế ảo tăng cường (AR/VR)
                FUWO tập trung vào các lĩnh vực hoạt động ở 4 nhóm sản phẩm chủ
                lực: edtech (công nghệ giáo dục), proptech (Công nghệ bất động
                sản), agritech (công nghệ nông nghiệp), fintech (công nghệ tài
                chính) nhằm mang đến cho người dùng những trải nghiệm phong phú,
                ứng dụng thông minh, đơn giản và tốt đẹp hơn.{" "}
              </Text>
            </div>
            <div className="button-wrapper">
              <ButtonIcon
                select={select === 1}
                onClick={() => Seclect(1)}
                title="Gia công công nghệ"
              />
              <ButtonIcon
                img={icon1}
                select={select === 2}
                onClick={() => Seclect(2)}
                title="Cung ứng nhân lực công nghệ"
              />
              <ButtonIcon
                img={icon2}
                select={select === 3}
                onClick={() => Seclect(3)}
                title="Đào tạo nhân sự công nghệ"
              />
              {/* <ButtonIcon
                select={select === 4}
                onClick={() => Seclect(4)}
                title="Xây dựng và thiết kế Website"
              /> */}
            </div>
          </ContentWrapper>
        </View.Chil2>
      </View>
    </section>
  );
};

export default Product;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 4rem 0;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    align-items: center;
  }

  .text-wrapper {
    max-width: 70%;
    text-align: justify;
    padding-left: 2rem;

    @media ${(props) => props.theme.breakpoints.md} {
      max-width: 80%;
      text-align: center;
      padding-left: 0;
    }
  }

  .button-wrapper {
    gap: 2rem;
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.breakpoints.md} {
      flex-direction: row;
    }
  }
`;

const ImageProduct = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 400px;
    height: 300px;
  }

  .text-wrapper {
    margin-top: 2rem;
    max-width: 400px;
    text-align: center;
  }
`;

const WrapperImg = styled.div`
  --size-pos: ${(props) => props.pos || `0rem`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30rem;
  transform: translateY(var(--size-pos));
`;
