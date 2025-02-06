import styled from "styled-components";
export const Timezone = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 25px;
  }
`;

export const CurrTimezone = styled.p`
  color: ${(props) => (props.night ? "white" : "#303030")};
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 3px;
  text-transform: uppercase;
  display: ${(props) => (props.clicked ? "block" : "none")};
  @media (max-width: 860px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Continent = styled.h1`
  color: ${(props) => (props.night ? "white" : "#303030")};
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: ${(props) => (props.clicked ? "block" : "none")};
  @media (max-width: 860px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 252px;
  opacity: 0.25;
  background: ${(props) => (props.night ? "white" : "#303030")};
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-right: 94px;
  @media (max-width: 600px) {
    display: none;
  }
`;
