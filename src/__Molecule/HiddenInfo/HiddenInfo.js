import styled from "styled-components";

export const HiddenInfo = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.clicked ? "350px" : "0px")};
  position: absolute;
  bottom: 0;
  transition: 0.2s ease-in-out;
  background-color: ${(props) =>
    props.night ? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)"};
  backdrop-filter: blur(20px);
  align-items: center;
  padding-left: 156px;
`;

export const ZoneYear = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 148px;
`;

export const Weeks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
