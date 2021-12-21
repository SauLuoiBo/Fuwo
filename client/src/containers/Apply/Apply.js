import React from "react";
import styled from "styled-components";
import bg from "../../assets/background/scareer.jpeg";
import { Button, Text } from "../../components";

const Apply = () => {
  return (
    <Wrapper>
      <div className="title-wrapper">
        <Text.Title color="var(--color-main)">CƠ HỘI NGHỀ NGHIỆP</Text.Title>
      </div>
      <div className="text-wrapper">
        <Text color="var(--color-text)">
          Chúng tôi luôn chào đón các ứng viên hoài bão, mong muốn dấn thân vào
          lĩnh vực Internet, yêu thích làm việc trong một môi trường năng động,
          trẻ trung và đầy thử thách.
        </Text>
      </div>
      <div className="button-wrapper">
        <Button text="ỨNG TUYỂN NGAY" />
      </div>
    </Wrapper>
  );
};

export default Apply;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg});
  width: 100%;
  padding: 5rem 2rem;
  background-attachment: fixed;
  background-size: cover;

  .title-wrapper {
    text-align: center;
  }

  .text-wrapper {
    text-align: center;
    max-width: 800px;
  }

  .button-wrapper {
    margin: 4rem auto;
  }
`;
