import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button } from "../../../Components";

export const BlueborderCard = ({ link, title, desc }) => {
  return (
    <BlueborderCardDiv>
      <BlueborderCardTitle>{title}</BlueborderCardTitle>
      <BlueborderCardLink>
        <h1>{link}</h1>
      </BlueborderCardLink>
      <BlueborderCardDesc>{desc}</BlueborderCardDesc>
    </BlueborderCardDiv>
  );
};

const BlueborderCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 35rem;
  height: 30rem;
  padding: 4rem 0;
  border: 1px solid rgba(0, 0, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const BlueborderCardLink = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-weight: 500;
    font-size: 2rem;
    color: rgba(0, 0, 255, 1);
  }
`;
const BlueborderCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;
const BlueborderCardDesc = styled.h4`
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.4rem;
  width: 80%;
`;

export const EmailInput = ({ ...rest }) => {
  return (
    <EmailInputDiv>
      <Input {...rest} placeholder="Enter a valid email address" />
      <Button
        text="SUBSCRIBE"
        borderRadius={"0"}
        height="4rem"
        fontWeight={"500"}
        fontSize={"1.5rem"}
      />
    </EmailInputDiv>
  );
};

const EmailInputDiv = styled.div`
  display: flex;
`;
const Input = styled.input`
  margin-right: 2rem;
  width: 40rem;
  height: 3.5rem;
  outline: none;
  border: 0.5px solid black;
  &::placeholder {
    color: rgba(85, 85, 85, 1);
  }
`;
