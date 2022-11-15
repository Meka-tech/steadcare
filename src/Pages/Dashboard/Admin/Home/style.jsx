import styled from "styled-components";
import { mobile } from "../../../../Utilities/responsive";
export const Cards = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 255, 0.02);
  margin: 4rem 0;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 5rem;
  grid-row-gap: 2rem;
  ${mobile({
    gridTemplateColumns: "auto auto",
    padding: "2rem"
  })}
`;
