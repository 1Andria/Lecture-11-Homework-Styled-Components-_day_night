import styled from "styled-components";

export const DivTxt = styled.div`
  max-width: 540px;
  margin-left: 156px;
  margin-top: 60px;
`;

export const Txt = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  opacity: ${(props) => (props.clicked ? 0 : 1)};
  transition: 0.3s ease-in-out;
`;
