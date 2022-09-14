import styled from "styled-components";

export const Main = styled.div`
  height: fit-content;
  width: 100%;
  overflow-x: hidden;
`;
export const BannerDiv = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const BannerImage = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  position: relative;
  font-weight: 600;
  color: white;
  font-size: 3rem;
  width: 40%;
  line-height: 5rem;
  margin-bottom: 1rem;
`;
export const Desc = styled.h2`
  position: relative;
  font-weight: 600;
  color: white;
  font-size: 1.5rem;
  width: 25%;
  line-height: 3rem;
  letter-spacing: 5%;
  margin-bottom: 4rem;
`;
