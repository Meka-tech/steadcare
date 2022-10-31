import styled from "styled-components";
import { mobile } from "../../../../Utilities/responsive";

export const Main = styled.div`
  margin: 4rem auto;
  height: fit-content;
  width: 90%;
  background-color: white;
  border-radius: 1rem;
  ${mobile({
    margin: "2rem auto"
  })}
`;

export const Forms = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 4rem;
  margin-top: 2rem;
  ${mobile({
    marginLeft: "0",
    display: "flex",
    flexDirection: "column"
  })}
`;
export const DropDowns = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 42%;
  margin-left: 4rem;
  margin-top: 1rem;
  ${mobile({
    width: "100%",
    marginLeft: "0",
    gridTemplateColumns: "47% 47%",
    gridColumnGap: "3rem"
  })}
`;
export const ButtonDiv = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  ${mobile({
    width: "50%",
    marginTop: "4rem"
  })}
`;
