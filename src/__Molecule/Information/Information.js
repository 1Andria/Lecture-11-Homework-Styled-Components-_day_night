import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 156px;
  @media (max-width: 1150px) {
    margin-left: 50px;
  }
`;

export const BelowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 90px;
  margin-right: 156px;
  @media (max-width: 1150px) {
    margin-right: 50px;
  }
`;

export const SunMorning = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
