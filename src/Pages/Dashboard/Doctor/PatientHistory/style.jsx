import styled from "styled-components";
import { mobile } from "../../../../Utilities/responsive";

export const Main = styled.div`
  width: 90%;
  max-width: 150rem;
  ${mobile({ width: "95%" })}
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 600;
  margin: 5rem 0;
`;

export const MedicalHistoryContainer = styled.div`
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 255, 0.3);
  width: 100%;
  min-height: 40rem;
  background-color: white;
  margin-bottom: 10rem;
  max-height: fit-content;
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
  ${mobile({ gridTemplateColumns: "18rem 15rem 15rem" })}
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    margin: auto 0;
    text-transform: uppercase;
    text-align: left;
    ${mobile({ fontSize: "1.2rem" })}
  }
`;

export const TabBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  max-height: fit-content;
  margin-bottom: 2rem;
`;
export const TabBodyText = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin: auto;
  ${mobile({ fontSize: "1.2rem" })}
`;
export const Column = styled.div`
  margin-top: 2rem;
  background-color: rgba(235, 235, 235, 0.8);
  border: 0.5px solid rgba(85, 85, 85, 0.7);
  height: 3.5rem;
  padding: 0 2rem;
  position: relative;
  display: grid;
  grid-template-columns: 43rem 30rem 15rem;
  ${mobile({ gridTemplateColumns: "21rem 12rem 8.5rem", padding: "0 1rem" })}
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    margin: auto 0;
    ${mobile({ fontSize: "1.2rem" })}
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
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
`;

export const ThreeDots = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: rgba(119, 119, 119, 1);
  cursor: pointer;
  padding-bottom: 1rem;
  width: fit-content;
  ${mobile({ fontSize: "1.5rem", margin: "0" })}
`;
export const DropdownContainer = styled.div`
  display: flex;
  border: 1px solid rgba(85, 85, 85, 0.7);
  position: absolute;
  bottom: -5rem;
  right: 0;
  width: 18rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;
export const DropdownItem = styled.div`
  height: 3.5rem;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 500;
  font-size: 1.4rem;
  &:hover {
    color: rgba(0, 0, 255, 1);
    background: rgba(0, 0, 255, 0.1);
  }
`;
