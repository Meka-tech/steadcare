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
  ${mobile({
    margin: "2rem 0",
    fontSize: "1.8rem"
  })}
`;

export const MedicalHistoryContainer = styled.div`
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 255, 0.3);
  width: 100%;
  min-height: 20rem;
  background-color: white;
  margin-bottom: 10rem;
`;
export const Tab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  border-bottom: ${(props) =>
    props.active ? `2px solid rgba(0, 0, 255, 1)` : null};
  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 2rem;
  }
`;
export const TabHeader = styled.div`
  background-color: rgba(224, 224, 224, 0.7);
  height: 3.5rem;
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 40rem 30rem 30rem;
  ${mobile({
    gridTemplateColumns: "18rem 15rem 15rem",
    padding: "0 2rem"
  })}
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    margin: auto 0;
    text-transform: uppercase;
    text-align: left;
    ${mobile({
      fontSize: "1rem"
    })}
  }
`;

export const TabBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 33rem;
  overflow-y: scroll;
  position: relative;
`;
export const TabBodyText = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin: auto;
  ${mobile({
    fontSize: "1.3rem"
  })}
`;
export const Column = styled.div`
  margin-top: 2rem;
  background-color: rgba(235, 235, 235, 0.8);
  border: 0.5px solid rgba(85, 85, 85, 0.7);
  height: 3.5rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 43rem 30rem 30rem;
  ${mobile({
    gridTemplateColumns: "17rem 15rem 15rem",
    height: "3rem",
    marginTop: "2rem"
  })}
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    margin: auto 0;
    ${mobile({
      fontSize: "1.2rem"
    })}
  }
`;
export const NameDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const DisplayPicture = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #dadada;
  margin-right: 1rem;
  ${mobile({
    width: "2rem",
    height: "2rem",
    marginRight: "0.5rem"
  })}
`;

export const Status = styled.div`
  margin: auto 0;
  margin-right: 2.5rem;
  font-weight: 500;
  font-size: 1.4rem;
  width: 9rem;
  border-radius: 0.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.status === "Granted"
      ? `rgba(27, 191, 0, 1)`
      : props.status === "Declined"
      ? `rgba(255, 0, 0, 1)`
      : null};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    fontSize: "1.2rem",
    width: "7rem"
  })}
`;
