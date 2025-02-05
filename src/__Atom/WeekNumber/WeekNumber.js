import styled from "styled-components";

export const WeekNumber = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumberWeek = styled.p`
  color: ${(props) => (props.night ? "white" : "#303030")};
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;
  display: ${(props) => (props.clicked ? "block" : "none")};
`;
export const NumWeek = styled.h1`
  color: ${(props) => (props.night ? "white" : "#303030")};
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: ${(props) => (props.clicked ? "block" : "none")};
`;
