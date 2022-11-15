import styled from "styled-components";
import { mobile } from "../../../../Utilities/responsive";

export const Main = styled.div`
  padding-top: 5rem;
  width: 90%;
  max-width: 150rem;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 500;
`;

export const PrescriptionListContainer = styled.div`
  margin-top: 4rem;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 255, 0.3);
  width: 100%;
  min-height: 40rem;
  background-color: white;
`;
export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 5rem;
  border-bottom: 2px solid rgba(217, 217, 217, 1);
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
  display: grid;
  grid-template-columns: auto auto auto;
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    margin: auto 0;
    text-transform: uppercase;
    text-align: center;
    ${mobile({
      fontSize: "1.2rem"
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
  border: 1px solid rgba(85, 85, 85, 0.7);
  height: 3.5rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 43rem 35rem 15rem;
  ${mobile({
    gridTemplateColumns: "15rem auto 10rem",
    height: "3rem",
    marginTop: "2rem",
    padding: "0 1rem"
  })}
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    margin: auto 0;
    ${mobile({
      fontSize: "1.2rem",
      textAlign: "center"
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
export const DateDiv = styled.div`
  margin: auto 0;
  display: flex;
  position: relative;
`;

export const ThreeDots = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: rgba(119, 119, 119, 1);
  cursor: pointer;
  padding-bottom: 1rem;
  margin-left: 2rem;
  ${mobile({ fontSize: "1.5rem", margin: "0", marginLeft: "1rem" })}
`;

export const DropdownContainer = styled.div`
  display: flex;
  border: 1px solid rgba(85, 85, 85, 0.7);
  position: absolute;
  bottom: -7rem;
  right: 0;
  width: 15rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 10;
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

export const Shade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1e1e11;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const ModalContainer = styled.div`
  height: 28rem;
  width: 45rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 2rem 0;
`;

export const ModalDisplayPicture = styled.div`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  background-color: lightgray;
`;

export const ModalNameText = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;
export const ModalHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  font-weight: 500;
  color: rgba(85, 85, 85, 0.9);
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 3rem;
  height: fit-content;
  height: 2rem;
`;
export const ModalDetail = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: fit-content;
  margin-bottom: 1rem;
`;

export const ModalDetailHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin: auto 0;
`;

export const ModalDetailContent = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  font-weight: 500;
  margin: auto 0;
  margin-left: 1rem;
`;
