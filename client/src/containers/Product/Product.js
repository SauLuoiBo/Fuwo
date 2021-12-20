import React from "react";
import styled from "styled-components";
import { ButtonIcon, Text, View } from "../../components";

const Product = () => {
  const [select, setSelect] = React.useState(1);
  const Seclect = (index) => {
    setSelect(index);
  };
  return (
    <section>
      <View>
        <View.Chil1>adsasd</View.Chil1>
        <View.Chil1>
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
                select={select === 2}
                onClick={() => Seclect(2)}
                title="Xây dựng và phát triển App"
              />
              <ButtonIcon
                select={select === 3}
                onClick={() => Seclect(3)}
                title="Blockchain và công nghệ AI"
              />
              <ButtonIcon
                select={select === 4}
                onClick={() => Seclect(4)}
                title="Xây dựng và thiết kế Website"
              />
            </div>
          </ContentWrapper>
        </View.Chil1>
      </View>
    </section>
  );
};

export default Product;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  .text-wrapper {
    max-width: 60%;
    text-align: justify;
  }

  .button-wrapper {
    gap: 2rem;

    display: flex;
    flex-direction: column;
  }
`;
