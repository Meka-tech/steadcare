import styled from "styled-components";

export const TopDoctors = styled.div`
  margin-top: 3rem;
  width: 100%;

  span {
    display: flex;
    justify-content: space-between;
    padding: 1em 4em;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(0, 0, 255, 1);
    cursor: pointer;
  }
`;
export const Doctors = styled.div`
  position: relative;
  background-color: rgba(0, 0, 255, 0.03);
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  overflow: hidden;
  height: ${(props) => (props.viewAll ? "fit-content" : "20rem")};
`;

export const BottomNavs = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  margin-bottom: 5rem;
`;
