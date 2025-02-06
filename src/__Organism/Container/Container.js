import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.1s;
  padding-bottom: ${(props) => (props.clicked ? "400px" : "0px")};
  @media (max-width: 600px) {
    padding-bottom: ${(props) => (props.clicked ? "300px" : "0px")};
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
`;
