import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { ReactComponent as DocIllus } from "../../Images/illustrations/docIllustraion.svg";
import { ReactComponent as Icons } from "../../Images/illustrations/signInIcons.svg";
import { useNavigate } from "react-router";

export const LogoDiv = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LogoSection onClick={() => navigate("/")}>
        <Logo style={{ cursor: "pointer" }} width={"4rem"} height={"4rem"} />
        <h1> SteadCare</h1>
      </LogoSection>
    </div>
  );
};

export const AuthMargin = () => {
  return (
    <Margin>
      <Top>
        <Icons width={"35rem"} height={"15rem"} />
      </Top>
      <Center>
        <DocIllus width={"35rem"} height={"30rem"} />
      </Center>
      <Bottom>
        <Icons width={"35rem"} height={"15rem"} />
      </Bottom>
    </Margin>
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
  width: 50rem;
  background-color: rgba(26, 26, 255, 0.4);
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  margin: auto;
`;
const Center = styled.div`
  margin: auto;
`;
const Bottom = styled.div`
  margin: auto;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 90rem;
  overflow: hidden;
`;
export const MarginLeft = styled.div`
  margin-left: 10rem;
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
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-align: left;
    color: rgba(0, 0, 255, 0.9);
    text-transform: uppercase;
    margin-left: 0.3rem;
    cursor: pointer;
  }
  margin: 3rem 0;
`;
export const TabContent = styled.div`
  margin-top: 2.4rem;
`;
export const SubHeader = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.5rem;
  text-align: left;
  width: 70%;
  color: rgba(34, 34, 34, 0.8);
`;

export const Headers = styled.h2`
  font-weight: 600;
  font-size: 2.2rem;
  color: black;
  line-height: 3.413rem;
  margin: 0;
  padding: 0;
`;

export const Forms = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 2.5rem;
  width: 80%;
`;
export const CheckBoxTextSpan = styled.div`
  display: flex;
  margin-left: 1rem;
`;
export const BlueText = styled.h3`
  color: rgba(0, 0, 255, 0.9);
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0.5rem;
`;
export const GrayText = styled.h3`
  color: rgba(85, 85, 85, 1);
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
`;
export const BoldText = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
`;
export const CheckBoxDiv = styled.div`
  margin: 1.5rem 0;
  display: flex;
`;
export const Span = styled.div`
  display: flex;
`;
