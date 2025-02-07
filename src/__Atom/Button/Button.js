import styled from "styled-components";

export const Button = styled.button`
  width: 146px;
  height: 56px;
  border-radius: 28px;
  background: #fff;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -20px;
  cursor: pointer;
  @media (max-width: 860px) {
    margin-left: 50px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    margin-left: 26px;
    width: 115px;
    height: 39px;
    margin-bottom: 10px;
  }
`;

export const ArrowMore = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

export const MoreLess = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 5px;
  text-transform: uppercase;
  opacity: 0.6;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ArrowRotate = styled.img`
  transition: 0.5s;
  transform: ${(props) => (props.clicked ? "rotate(-180deg)" : "rotate(0deg)")};
`;
