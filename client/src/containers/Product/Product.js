import React from "react";
import styled from "styled-components";
import { ButtonIcon, Text, View } from "../../components";
import icon1 from "../../assets/icons/app.png";
import icon2 from "../../assets/icons/icons8-ai-256.png";

const Product = () => {
  const [select, setSelect] = React.useState(1);
  const Seclect = (index) => {
    setSelect(index);
  };
  return (
    <section>
      <View>
        <View.Chil1>
          <ImageProduct />
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
                title="Xây dựng và thiết kế Website"
              />
              <ButtonIcon
                img={icon1}
                select={select === 2}
                onClick={() => Seclect(2)}
                title="Xây dựng và phát triển App"
              />
              <ButtonIcon
                img={icon2}
                select={select === 3}
                onClick={() => Seclect(3)}
                title="Blockchain và công nghệ AI"
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

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    align-items: center;
  }

  .text-wrapper {
    max-width: 60%;
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
`;
