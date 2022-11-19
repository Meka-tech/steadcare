import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { mobile } from "../../Utilities/responsive";
import { Calendar } from "react-calendar";
import { ReactComponent as CalendarIcon } from "../../Images/FormIcons/formCalendarIcon.svg";
import useClickOutside from "../../hooks/useClickOutside";
import moment from "moment";
import { useEffect } from "react";

export const CalendarForm = ({
  title,
  placeholder,
  inputDate,
  type,
  errorMsg,
  width,
  height,
  inactive,
  borderRadius,
  fontSize,
  backgroundColor,
  onClickIcon,
  setDate,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [date, onChangeDate] = useState(new Date());
  const calendarRef = useRef();
  useClickOutside(calendarRef, () => setFocused(false));

  useEffect(() => {
    setDate(date);
  }, [date, setDate]);

  const m = moment(inputDate);
  return (
    <Container width={width} focused={focused}>
      {focused && (
        <CalendarDiv ref={calendarRef}>
          <Calendar
            onChange={onChangeDate}
            value={date}
            onClickDay={() =>
              setTimeout(() => {
                setFocused(false);
              }, 500)
            }
          />
        </CalendarDiv>
      )}

      <Title focused={focused}>{title}</Title>
      <InputField
        focused={focused}
        inactive={inactive}
        borderRadius={borderRadius}
        height={height}
        backgroundColor={backgroundColor}
      >
        <Input
          placeholder={placeholder}
          onBlur={() => setFocused(false)}
          onFocus={() => {
            if (inactive) {
              return;
            } else {
              setFocused(true);
            }
          }}
          value={m.format("L")}
          fontSize={fontSize}
          readOnly
          {...rest}
        />
        <Icon
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (inactive) {
              return;
            } else {
              setFocused(true);
            }
          }}
        >
          <CalendarIcon />
        </Icon>
      </InputField>
      <ErrorMsg>{errorMsg}</ErrorMsg>
    </Container>
  );
};

const Container = styled.form`
  top: 0;
  margin-bottom: 1.5rem;
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  width: ${(props) => (props.width ? props.width : "100%")};
  ${mobile({
    width: "100%",
    marginBottom: "2rem"
  })}
`;

const Input = styled.input`
  background-color: transparent;
  &[type="password"] {
    font-family: Verdana;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
    letter-spacing: 0.125em;
  }
  margin-left: 1rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  color: black;
  width: 85%;
  outline: none;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  border: none;
  &::placeholder {
    color: rgba(75, 72, 78, 0.7);
    padding: 0;
    margin: 0;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.6rem")};
    ${mobile({ fontSize: "1.4rem" })}
  }
`;

const InputField = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  height: ${(props) => (props.height ? props.height : "4rem")};
  width: 100%;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  border: ${(props) =>
    props.focused
      ? "1px solid rgba(0, 0, 255, 0.9)"
      : props.inactive
      ? `1px solid rgba(85, 85, 85, 0.3)`
      : "1px solid rgba(85, 85, 85, 1)"};
  display: flex;
  background-color: ${(props) =>
    props.focused && props.inactive
      ? `rgba(0, 0, 187, 0.1)`
      : props.inactive
      ? `rgba(196, 196, 196, 0.1) `
      : null};
`;
const Title = styled.label`
  color: ${(props) => (props.focused ? "rgba(0, 0, 255, 0.9)" : "black")};
  font-weight: 500;

  font-size: 1.6rem;
  line-height: 1.95rem;
  margin-bottom: 0.8rem;
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
`;

const Icon = styled.i`
  z-index: 50;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;

  ${mobile({ width: "10%" })}
`;

const ErrorMsg = styled.h3`
  color: rgba(255, 0, 0, 1);
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  letter-spacing: 0.03em;
  padding-top: 0.5rem;
  width: ${(props) => (props.width ? props.width : "300px")};
`;
export const CalendarDiv = styled.div`
  position: absolute;
  width: 30rem;
  height: fit-content;
  box-sizing: border-box;
  top: -100%;
  left: 0;
  right: 0;
  z-index: 100;
  ${mobile({
    margin: "1rem",
    width: "38rem"
  })}

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
  /* ~~~ container styles ~~~ */
  /* ... */

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 1rem;

    .react-calendar__navigation__label {
      font-weight: 500;
      font-size: 1.4rem;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      font-size: 1.5rem;
    }
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 1.2rem;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    ${mobile({
      fontSize: "1.4rem"
    })}
  }
  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    border: 0;
    border-radius: 0.3;
    color: black;
    padding: 0.8rem;
    font-size: 1rem;
    font-family: Montserrat;
    ${mobile({
      fontSize: "1.4rem"
    })}

    &:hover {
      /* background-color: rgba(0, 0, 255, 0.5); */
      color: white;
    }

    &:active {
      /* background-color: rgba(0, 0, 255, 0.5); */
      color: white;
    }
  }
  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.6;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #ff0000;
  }
  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    /* background-color: rgba(0, 0, 255, 1); */
    color: white;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
