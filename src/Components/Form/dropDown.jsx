import React from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Select } from "../../Images/Directionals/select.svg";

export const Dropdown = ({
  ref,
  title,
  label = "select",
  width,
  height,
  items,
  onSelect = () => {}
}) => {
  const [active, setActive] = useState(false);
  const dropDownRef = useRef(null);

  const ToggleActive = () => {
    setActive(!active);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(dropDownRef);
  return (
    <Container ref={dropDownRef}>
      <Title>{title}</Title>
      <div
        style={{
          position: "relative",
          display: "flex ",
          flexDirection: "column-reverse"
        }}
      >
        <InputField width={width} height={height}>
          <Label> {label}</Label>
        </InputField>
        <Icon style={{ cursor: "pointer" }} onClick={() => ToggleActive()}>
          <Select />
        </Icon>
      </div>
      {items ? (
        <Menu active={active}>
          {items?.map((item, index) => {
            return (
              <div key={index} onClick={onSelect}>
                <h1>{item}</h1>
              </div>
            );
          })}
        </Menu>
      ) : null}
    </Container>
  );
};

const Container = styled.form`
  margin-bottom: 15px;
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s ease-in-out;
  width: 100%;
`;

const InputField = styled.div`
  margin: 0;
  padding: 0px 10px;
  font-size: 16px;
  color: rgba(75, 72, 78, 0.7);
  line-height: 19.5px;
  height: ${(props) => (props.height ? props.height : "45px")};
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: 5px;
  border: 1px solid rgba(85, 85, 85, 0.3);
  line-height: 24.38px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-align: left;
  background-color: rgba(196, 196, 196, 0.1);
  align-items: center;
  display: flex;
  text-transform: capitalize;
  z-index: 1;
`;
const Title = styled.label`
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.div``;

const Icon = styled.i`
  position: absolute;
  z-index: 200;
  bottom: 8px;
  right: -10px;
  transform: scale(0.8);

  cursor: pointer;
`;
const Menu = styled.div`
  width: 100%;
  padding: 0px 10px;
  height: fit-content;
  border: 1px solid rgba(85, 85, 85, 0.7);
  margin-top: 2px;
  transform: ${(props) =>
    props.active ? "translateY(0)" : "translateY(-50px)"};
  display: ${(props) => (props.active ? "block" : "none")};
  transition: all 0.2s ease-in;
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 180px;
  div {
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    height: 35px;
    h1 {
      margin-left: 20px;
      font-size: 16px;
      font-weight: 500;
    }
    &:hover {
      background-color: rgba(0, 0, 255, 0.1);
      h1 {
        color: rgba(0, 0, 255, 0.9);
      }
    }
  }
`;
