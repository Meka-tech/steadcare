import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button } from "../../../Components";

export const BlueborderCard = ({ icon, title, desc }) => {
  const navigate = useNavigate();
  return (
    <BlueborderCardDiv>
      <BlueborderCardIcon>{icon}</BlueborderCardIcon>
      <BlueborderCardTitle>{title}</BlueborderCardTitle>
      <BlueborderCardDesc>{desc}</BlueborderCardDesc>
      <Button
        text="Create Account"
        bgColor={"white"}
        color={"black"}
        fontSize="1.4rem"
        border={" 1px solid rgba(0, 0, 255, 1)"}
        onClick={() => navigate("/sign-up")}
      />
    </BlueborderCardDiv>
  );
};

const BlueborderCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 32rem;
  height: 35rem;
  padding: 4rem 0;
  border: 1px solid rgba(0, 0, 255, 1);
  border-radius: 5px;
`;
const BlueborderCardIcon = styled.div`
  margin-bottom: 2rem;
`;
const BlueborderCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
const BlueborderCardDesc = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.6rem;
  width: 68%;
  margin-bottom: 4rem;
`;
export const TransparentBlueborderCard = ({ icon, desc }) => {
  return (
    <TransparentBlueborderCardDiv>
      <TransparentBlueborderCardIcon>{icon}</TransparentBlueborderCardIcon>
      <TransparentBlueborderCardDesc>{desc}</TransparentBlueborderCardDesc>
    </TransparentBlueborderCardDiv>
  );
};

const TransparentBlueborderCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  max-width: 28rem;
  height: 18rem;
  padding: 4rem 0;
  border: 2px solid rgba(114, 163, 253, 1);
  border-radius: 1rem;
  align-items: center;
  padding-left: 3rem;
`;
const TransparentBlueborderCardIcon = styled.div`
  margin-bottom: 1rem;
  margin-right: auto;
`;

const TransparentBlueborderCardDesc = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.4rem;
  width: 80%;
  margin-right: auto;
`;

export const BoxShadowCard = ({ icon, title, desc }) => {
  return (
    <BoxShadowCardDiv>
      <ImageContainer>{icon}</ImageContainer>
      <BoxShadowCardTitle>{title}</BoxShadowCardTitle>
      <BoxShadowCardDesc>{desc}</BoxShadowCardDesc>
    </BoxShadowCardDiv>
  );
};

const BoxShadowCardDiv = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(13, 121, 210, 0.5);
  width: 35rem;
  height: 28rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  margin-bottom: 2rem;
`;

const BoxShadowCardTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`;

const BoxShadowCardDesc = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.4rem;
  width: 80%;
`;
