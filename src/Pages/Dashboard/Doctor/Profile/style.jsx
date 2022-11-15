import styled from "styled-components";
import { mobile } from "../../../../Utilities/responsive";

export const Main = styled.div`
  height: fit-content;
  width: 90%;
  background-color: white;
  margin: 5rem auto;
  border-radius: 1rem;
`;

export const Forms = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 4rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
  ${mobile({ display: "flex", flexDirection: "column", marginLeft: "0" })}
`;
export const DropDowns = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
  ${mobile({ width: "100%", display: "flex", justifyContent: "space-between" })}
`;
export const ButtonDiv = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  ${mobile({ width: "40%" })}
`;
