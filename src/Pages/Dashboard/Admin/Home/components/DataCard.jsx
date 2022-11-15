import styled from "styled-components";
import { mobile } from "../../../../../Utilities/responsive";

export const DataCard = ({ icon, number, title, money }) => {
  return (
    <DataCardDiv>
      {icon}
      <div>
        <DataCardTitle>{title}</DataCardTitle>
        <DataCardNumber>
          {money && "N "}
          {number}
        </DataCardNumber>
      </div>
    </DataCardDiv>
  );
};

const DataCardDiv = styled.div`
  box-sizing: border-box;
  width: 30rem;
  height: 13rem;
  display: flex;
  padding-left: 3rem;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 255, 0.2);
  background-color: white;
  ${mobile({
    width: "21rem",
    paddingLeft: "1rem",
    height: "8rem"
  })}
  div {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    ${mobile({
      paddingLeft: "1rem"
    })}
  }
`;

const DataCardTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.4rem;
  color: rgba(34, 34, 34, 1);
  margin-bottom: 1rem;
  ${mobile({
    fontSize: "1.2rem",
    marginBottom: "0.5rem"
  })}
`;
const DataCardNumber = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1.6rem;
  color: rgba(34, 34, 34, 1);
  ${mobile({
    fontSize: "1.4rem"
  })}
`;
