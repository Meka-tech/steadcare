import styled from "styled-components";
import { mobile } from "../../Utilities/responsive";

export const Main = styled.div`
  height: fit-content;
  width: 100%;
  overflow-x: hidden;
`;
export const BannerDiv = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.img});
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  ${mobile({ height: "25rem", padding: "0 1rem" })}
`;

export const Title = styled.h1`
  position: relative;
  font-weight: 600;
  color: white;
  font-size: 3rem;
  width: 40%;
  line-height: 5rem;
  margin-bottom: 1rem;
  ${mobile({
    fontSize: "1.5rem",
    width: "50%",
    marginBottom: "1rem",
    lineHeight: "2rem"
  })}
`;
export const Desc = styled.h2`
  position: relative;
  font-weight: 600;
  color: white;
  font-size: 1.5rem;
  width: 25%;
  line-height: 3rem;
  letter-spacing: 5%;
  margin-bottom: 4rem;
  ${mobile({
    fontSize: "1.2rem",
    width: "50%",
    marginBottom: "2rem",
    lineHeight: "2rem"
  })}
`;
