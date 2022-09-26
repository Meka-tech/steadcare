import styled from "styled-components";
import { mobile } from "../../Utilities/responsive";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  ${mobile({
    display: "block"
  })}
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(241, 239, 239, 0.97);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  ${mobile({
    backgroundColor: "white"
  })}
`;
export const Banner = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 255, 0.75);
  height: 16rem;
  max-width: 100rem;
  border-radius: 1rem;
  margin-top: 4rem;
  display: flex;
  color: white;
  justify-content: space-between;
  ${mobile({
    width: "95%",
    marginTop: "3rem"
  })}
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    width: 80%;
    ${mobile({
      width: "90%"
    })}
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: left;
    ${mobile({
      fontSize: "1.5rem"
    })}
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    ${mobile({
      fontSize: "1rem"
    })}
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    ${mobile({
      fontSize: "1.4rem"
    })}
  }
`;

export const SearchDiv = styled.div`
  background-color: white;
  height: 5rem;
  min-height: 5rem;
  width: 95%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
  justify-content: space-between;
  span {
    margin-left: 2rem;
    cursor: pointer;
  }
  ${mobile({
    marginTop: "2rem"
  })}
`;
export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    display: "none"
  })}
`;
