import styled from "styled-components";
import { mobile } from "../../../../Utilities/responsive";

export const Main = styled.div`
  width: 90%;
  max-width: 150rem;
`;
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 600;
  margin: 5rem 0;
  margin-bottom: 2rem;
`;
export const WhiteDiv = styled.div`
  background-color: white;
  max-width: 200rem;
  height: 60rem;
  max-height: fit-content;
  margin-bottom: 5rem;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 255, 0.3);
  padding: 2rem 2rem;
  ${mobile({ height: "fit-content" })}
`;

export const ChangePasswords = styled.div`
  padding-right: 2rem;
  margin-left: 5rem;
  ${mobile({ marginLeft: "2rem" })}
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
  div {
    h2 {
      font-size: 1.6rem;
      font-weight: 400;
    }

    display: flex;
    justify-content: space-between;
  }
`;
export const PasswordField = styled.div`
  width: 60rem;
  position: relative;
  ${mobile({ width: "40rem" })}
`;

export const ButtonField = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
  width: fit-content;
`;

export const Notification = styled.div`
  padding-right: 2rem;
  margin-left: 5rem;
  width: 10rem;
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
  div {
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
