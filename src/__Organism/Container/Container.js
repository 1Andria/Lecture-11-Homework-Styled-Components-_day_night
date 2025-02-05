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
  transition: 0.2s ease-in-out;
  padding-bottom: ${(props) => (props.clicked ? "400px" : "0px")};
`;
