import styled from "styled-components";

export const HiddenInfo = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.clicked ? "350px" : "0px")};
  position: absolute;
  bottom: 0;
  transition: 0.3s;
  background-color: ${(props) =>
    props.clicked ? "rgba(255, 255, 255, 0.75)" : "transparent"};
  backdrop-filter: ${(props) => (props.clicked ? "blur(20px)" : "none")};
`;
