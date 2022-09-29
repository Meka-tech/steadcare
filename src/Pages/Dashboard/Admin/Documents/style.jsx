import styled from "styled-components";

export const DocumentListContainer = styled.div`
  margin-top: 4rem;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 255, 0.3);
  width: 90%;
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
  border-bottom: 3px solid rgba(217, 217, 217, 1);
`;
export const Tab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  border-bottom: ${(props) =>
    props.active ? `3px solid rgba(0, 0, 255, 1)` : null};
  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 2rem;
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
