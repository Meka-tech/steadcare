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
  onSelect = () => {},
  selectedItem,
  bgColor
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
    <Container ref={dropDownRef} width={width}>
      <Body>
        <Title>{title}</Title>
        <Input>
          <InputField height={height} bgColor={bgColor}>
            {selectedItem ? (
              <Label> {selectedItem}</Label>
            ) : (
              <Label> {label}</Label>
            )}
            <Icon style={{ cursor: "pointer" }} onClick={() => ToggleActive()}>
              <Select />
            </Icon>
          </InputField>
        </Input>
      </Body>

      {items && active ? (
        <Menu active={active}>
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  onSelect(item);
                  setActive(false);
                }}
              >
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
  margin-bottom: 1.5rem;
  position: relative;
  height: fit-content;
  transition: 0.2s ease-in-out;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
const InputField = styled.div`
  margin: 0;
  font-size: 1.6rem;
  color: rgba(75, 72, 78, 0.7);
  line-height: 1.95rem;
  height: ${(props) => (props.height ? props.height : "45px")};
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(85, 85, 85, 0.3);
  line-height: 2.438rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-align: left;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgba(196, 196, 196, 0.1)"};
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;
const Title = styled.label`
  color: black;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.95rem;
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
`;
const Label = styled.div`
  padding-left: 1rem;
`;

const Icon = styled.i`
  transform: scale(0.8);
  cursor: pointer;
  margin-right: 1rem;
`;
const Menu = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid rgba(85, 85, 85, 0.7);
  background-color: white;
  transition: all 0.2s ease-in;
  overflow-y: scroll;
  max-height: 18rem;
  position: absolute;
  z-index: 2;
  div {
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    height: 3.5rem;
    h1 {
      margin-left: 2rem;
      font-size: 1.6rem;
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
