import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(241, 239, 239, 0.97);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;

export const SearchDiv = styled.div`
  background-color: white;
  height: 5rem;
  min-height: 5rem;
  width: 95%;
  display: flex;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-left: 2rem;
    cursor: pointer;
  }
`;
