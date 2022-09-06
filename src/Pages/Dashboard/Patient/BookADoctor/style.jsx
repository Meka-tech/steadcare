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

export const DoctorCard = styled.div`
  height: 18rem;
  width: 35rem;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 255, 0.3);
  margin-bottom: 3rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  div {
    display: flex;
  }
`;
export const DisplayPic = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background-color: gray;
  margin-right: 1rem;
`;
export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const Rating = styled.div`
  background-color: rgba(255, 183, 43, 0.2);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  h4 {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    margin-left: 0.2em;
  }
`;
export const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    margin: 0;
    padding: 0;
    color: rgba(85, 85, 85, 1);
    font-size: 1.4rem;
    font-weight: 500;
  }
  h2 {
    margin: 0;
    padding: 0;
    color: rgba(85, 85, 85, 1);
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`;
export const TextSection = styled.div`
  width: 100%;
  height: 4rem;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
`;
