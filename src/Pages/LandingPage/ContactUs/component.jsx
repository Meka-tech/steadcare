import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button } from "../../../Components";
import { mobile } from "../../../Utilities/responsive";

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
  ${mobile({
    marginBottom: "2.5rem",
    width: "25rem",
    height: "25rem",
    padding: "2rem 0"
  })}
`;
const BlueborderCardLink = styled.div`
  margin-bottom: 2rem;
  ${mobile({
    marginBottom: "1.5rem"
  })}
  h1 {
    font-weight: 500;
    font-size: 2rem;
    color: rgba(0, 0, 255, 1);
    ${mobile({
      fontSize: "1.6rem"
    })}
  }
`;
const BlueborderCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  ${mobile({
    fontSize: "1.4rem"
  })}
`;
const BlueborderCardDesc = styled.h4`
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.4rem;
  width: 80%;
  ${mobile({
    fontSize: "1.3rem"
  })}
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
  z-index: 10;
  ${mobile({
    justifyContent: "center"
  })}
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
  ${mobile({
    width: "30rem"
  })}
`;
