import React from "react";
import styled from "styled-components";
import { truncateStrng } from "../../Utilities/globalFunc";

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
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 8px;
`;

const Body = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 255, 0.7);
  display: flex;
`;
const Field = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  overflow: hidden;
  h2 {
    margin-left: 10px;
    color: black;
    font-size: 16px;
    font-weight: 500;
  }
  h3 {
    margin: 0;
    padding: 0;
    margin-left: 10px;
    color: rgba(85, 85, 85, 1);
    font-size: 16px;
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
    font-size: 16px;
    font-weight: 500;
    line-height: 37px;
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
