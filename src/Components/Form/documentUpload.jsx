import React from "react";
import styled from "styled-components";
import { truncateStrng } from "../../Utilities/globalFunc";
import { mobile } from "../../Utilities/responsive";

export const DocumentUpload = ({ title, width, onChange, fileName }) => {
  return (
    <Container width={width}>
      <Title>{title}</Title>
      <Body>
        <Field>
          {fileName ? (
            <h2>{truncateStrng(fileName, 25)}</h2>
          ) : (
            <h3>Choose file...</h3>
          )}
        </Field>
        <Button>
          <h3>Browse</h3>
          <FileInput type={"file"} onChange={onChange} accept="image/*" />
        </Button>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-bottom: 3rem;
  ${mobile({ width: "100%" })}
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.95rem;
  margin-bottom: 0.8rem;
`;

const Body = styled.div`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 255, 0.7);
  display: flex;
`;
const Field = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  overflow: hidden;
  h2 {
    margin-left: 1rem;
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
  }
  h3 {
    margin: 0;
    padding: 0;
    margin-left: 1rem;
    color: rgba(85, 85, 85, 1);
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
const Button = styled.div`
  border-left: 1px solid rgba(0, 0, 255, 0.7);
  flex: 0.7;
  cursor: pointer;
  background-color: rgba(0, 0, 255, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3.7rem;
    letter-spacing: 0em;
    color: rgba(0, 0, 255, 1);
  }
`;
const FileInput = styled.input`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  position: absolute;
`;
