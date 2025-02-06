import styled from "styled-components";

export const DivTxt = styled.div`
  max-width: 540px;
  margin-left: 156px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: ${(props) => (props.clicked ? "0px" : "auto")};
  @media (max-width: 1150px) {
    margin-left: 50px;
  }
`;

export const Txt = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  opacity: ${(props) => (props.clicked ? 0 : 1)};
  transition: 0.2s ease-in-out;
`;

export const Author = styled.h2`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  opacity: ${(props) => (props.clicked ? 0 : 1)};
  transition: 0.2s ease-in-out;
`;

export const Rev = styled.img`
  transition: 0.4s;
  cursor: pointer;
  transform: ${(props) => (props.quote ? "rotate(360deg)" : "rotate(0deg)")};
  opacity: ${(props) => (props.clicked ? 0 : 1)};
`;
