import styled from "styled-components";

export const Main = styled.div`
  padding-top: 5rem;
  width: 90%;
  max-width: 150rem;
`;
export const ProgressDiv = styled.div`
  margin-bottom: 3rem;
`;
export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  text-align: center;
`;
export const Header = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 50% 15rem;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.7);
  min-width: 85rem;
  width: 90%;
  max-width: 116rem;
  height: 10rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
`;
export const DoctorGrid = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
`;

export const DateAndTime = styled.div`
  width: 100%;
  min-height: 40rem;
  max-height: fit-content;
  box-sizing: border-box;
  border: 1px solid rgba(85, 85, 85, 1);
  border-radius: 0.5rem;
  margin-bottom: 4rem;
  background-color: white;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
`;
export const DateAndTimeButton = styled.div`
  margin-bottom: 8rem;
`;
export const DateAndTimeFooter = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const CalendarDiv = styled.div`
  width: 35rem;
  height: fit-content;
  box-sizing: border-box;

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

export const TimeDiv = styled.div`
  width: 100%;
  margin-bottom: 3em;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
  }
`;
export const TimeNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    background-color: rgba(0, 0, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 3rem;
    margin-right: 4rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
export const ComplaintFormHeader = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    width: 30%;
    border-bottom: 1px solid rgba(85, 85, 85, 1);
  }
  h1 {
    font-family: Montserrat;
    font-size: 2rem;
    font-weight: 500;
  }
`;
export const PatientForm = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 0.5rem;
  margin-top: 4rem;
  border: 1px solid rgba(85, 85, 85, 1);
  padding: 4rem 5rem;
  margin-bottom: 5rem;
`;

export const SuccessDiv = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  background-color: white;
  border: 1px solid #555555;
  height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  h1 {
    width: 60%;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    line-height: 3rem;
    margin: 0 auto;
  }
  margin-bottom: 5rem;
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
