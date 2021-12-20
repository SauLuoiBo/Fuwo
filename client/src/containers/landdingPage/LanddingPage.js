import React from "react";
import styled from "styled-components";
import { Text } from "../../components";

const LanddingPage = () => {
  return (
    <Wrapper className="container">
      <Text.Title>
        Nghiên cứu và phát triển công nghệ để kiến tạo một thế giới, một tương
        lai tốt đẹp hơn
      </Text.Title>
    </Wrapper>
  );
};

export default LanddingPage;

const Wrapper = styled.div`
  background-color: #ffc600;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
