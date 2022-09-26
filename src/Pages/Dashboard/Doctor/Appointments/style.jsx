import styled from "styled-components";

export const Main = styled.div`
  padding-top: 5rem;
  width: 90%;
  max-width: 150rem;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 500;
`;

export const AppointmentListContainer = styled.div`
  margin-top: 4rem;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 255, 0.3);
  width: 100%;
  height: 42rem;
  max-height: fit-content;
  position: relative;
  background-color: white;
  margin-bottom: 4rem;
`;
export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 5rem;
  border-bottom: 2px solid rgba(217, 217, 217, 1);
`;
export const Tab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  border-bottom: ${(props) =>
    props.active ? `2px solid rgba(0, 0, 255, 1)` : null};
  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 2rem;
  }
`;
export const TabHeader = styled.div`
  background-color: rgba(224, 224, 224, 0.7);
  height: 3.5rem;
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 40rem 20rem 15rem 18rem;
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    margin: auto 0;
    text-transform: uppercase;
    text-align: left;
  }
`;
export const TabBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 30rem;
  padding-bottom: 2rem;
`;
export const TabBodyText = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;

  margin: auto;
`;
export const Column = styled.div`
  margin-top: 2rem;
  background-color: rgba(235, 235, 235, 0.8);
  border: 1px solid rgba(85, 85, 85, 0.7);
  height: 3.5rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 43rem 20rem 15rem 18rem;
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    margin: auto 0;
  }
`;
export const NameDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const DisplayPicture = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #dadada;
  margin-right: 1rem;
`;
export const StatusDiv = styled.div`
  margin: auto 0;
  display: flex;
  position: relative;
`;
export const Status = styled.div`
  margin: auto 0;
  margin-right: 2.5rem;
  font-weight: 500;
  font-size: 1.4rem;
  width: 9rem;
  border-radius: 0.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.status === "pending"
      ? `rgba(119, 119, 119, 1)`
      : props.status === "completed"
      ? `rgba(27, 191, 0, 1)`
      : props.status === "declined"
      ? `rgba(255, 0, 0, 1)`
      : null};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const ThreeDots = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: rgba(119, 119, 119, 1);
  cursor: pointer;
  padding-bottom: 1rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  border: 1px solid rgba(85, 85, 85, 0.7);
  position: absolute;
  bottom: -5rem;
  right: 0;
  width: 12rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;
export const DropdownItem = styled.div`
  height: 3.5rem;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 500;
  font-size: 1.4rem;
  &:hover {
    color: rgba(0, 0, 255, 1);
    background: rgba(0, 0, 255, 0.1);
  }
`;
