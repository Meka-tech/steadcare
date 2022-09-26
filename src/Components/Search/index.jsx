import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../Images/searchIcon.svg";
import { mobile } from "../../Utilities/responsive";

export const Search = ({ placeholder, ...rest }) => {
  return (
    <Container>
      <Input placeholder={placeholder} {...rest} />
      <Button>
        <SearchIcon width={"2.5rem"} height={"2.5rem"} />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(196, 196, 196, 0.15);
  display: flex;
  align-items: center;
  height: 2rem;
  width: 40rem;
  padding: 0.8rem 2rem;
  border-radius: 2.5rem;
  ${mobile({ width: "100%", height: "3rem" })}
`;

const Input = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background: transparent;
  color: black;
  font-size: 1.6rem;
  letter-spacing: 3%;
  &::placeholder {
    color: rgba(85, 85, 85, 1);
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
  }
  ${mobile({ fontSize: "1.4rem" })}
`;
const Button = styled.div`
  cursor: pointer;
  justify-self: flex-end;
`;
