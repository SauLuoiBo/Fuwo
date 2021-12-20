import React from "react";
import styled from "styled-components";

const View = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

View.Chil1 = function ViewChil1({ children, ...restProps }) {
  return (
    <Chil {...restProps} className="chil1">
      {children}
    </Chil>
  );
};

View.Chil2 = function ViewChil1({ children, ...restProps }) {
  return (
    <Chil {...restProps} className="chil2">
      {children}
    </Chil>
  );
};

export default View;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Chil = styled.div`
  width: 100%;
  height: fit-content;
  display: block;
`;
