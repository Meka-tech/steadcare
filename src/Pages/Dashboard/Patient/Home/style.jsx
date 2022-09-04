import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 255, 0.75);
  height: 16rem;
  max-width: 100rem;
  border-radius: 1rem;
  margin-top: 4rem;
  display: flex;
  color: white;
  justify-content: space-between;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    width: 80%;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

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
