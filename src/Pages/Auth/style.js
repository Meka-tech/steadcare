import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/Logo.svg";

export const LogoDiv = () => {
  return (
    <div>
      <LogoSection>
        <Logo style={{ cursor: "pointer" }} />
        <h1> SteadCare</h1>
      </LogoSection>
    </div>
  );
};
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const Margin = styled.div`
  height: 100%;
  width: 600px;
  background-color: rgba(26, 26, 255, 0.4);
`;

export const Body = styled.div`
  margin-left: 100px;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
`;
const LogoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  h1 {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 3px;
    cursor: pointer;
  }
  margin: 30px 0px;
`;
export const Forms = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 35px;
  width: 80%;
`;
export const CheckBoxTextSpan = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const BlueText = styled.h3`
  color: rgba(0, 0, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  margin: 0px 5px;
`;
export const GrayText = styled.h3`
  color: rgba(85, 85, 85, 1);
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;
export const BoldText = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;
export const CheckBoxDiv = styled.div`
  margin: 15px 0px;
  display: flex;
`;
export const Span = styled.div`
  display: flex;
`;
