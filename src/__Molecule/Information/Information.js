import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 156px;
  @media (max-width: 1150px) {
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    margin-left: 26px;
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
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

export const SunMorning = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InformationalDiv = styled.div`
  display: flex;
  align-items: start;
  gap: 5px;
`;

export const SunMoon = styled.img`
  width: 24px;
  height: 24px;
`;

export const DayTime = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 4px;
  text-transform: uppercase;
  @media (max-width: 860px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const ClockBST = styled.div`
  display: flex;
  align-items: end;
`;

export const Clock = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 200px;
  letter-spacing: -5px;
  @media (max-width: 860px) {
    font-size: 175px;
    line-height: 175px;
  }
  @media (max-width: 600px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const BST = styled.h5`
  color: #fff;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 30px;
  margin-left: 16px;
  @media (max-width: 860px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const Locat = styled.h3`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  @media (max-width: 860px) {
    font-size: 18px;
  }
  @media (max-width: 860px) {
    font-size: 15px;
  }
`;
