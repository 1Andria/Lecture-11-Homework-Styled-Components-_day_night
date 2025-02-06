import styled from "styled-components";

export const HiddenInfo = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.clicked ? "400px" : "0px")};
  position: absolute;
  bottom: 0;
  transition: 0.1;
  background-color: ${(props) =>
    props.night ? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)"};
  backdrop-filter: blur(20px);
  align-items: center;
  padding-left: 156px;
  @media (max-width: 1150px) {
    padding-left: 50px;
  }
  @media (max-width: 860px) {
    height: ${(props) => (props.clicked ? "340px" : "0px")};
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    align-items: start;
    justify-content: space-evenly;
    height: ${(props) => (props.clicked ? "256px" : "0px")};
  }
`;

export const ZoneYear = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 148px;
  @media (max-width: 1150px) {
    margin-right: 50px;
  }
  @media (max-width: 600px) {
    margin: 0px;
    width: 100%;
    display: ${(props) => (props.clicked ? "block" : "none")};
  }
`;

export const Weeks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 600px) {
    margin: 0px;
    width: 100%;
    display: ${(props) => (props.clicked ? "block" : "none")};
  }
`;
