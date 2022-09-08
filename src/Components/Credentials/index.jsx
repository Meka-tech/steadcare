import styled from "styled-components";
import { ReactComponent as EditDP } from "../../Images/EditIcon.svg";

export const Credentials = ({ firstName, lastName, email }) => {
  return (
    <Container>
      <Initials>
        <h1>
          {firstName[0]}
          {lastName[0]}
        </h1>
        <Icon>
          <EditDP />
        </Icon>
      </Initials>
      <Text>
        <Name>
          {firstName} {lastName}
        </Name>
        <Email>{email}</Email>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-left: 4rem;
  align-items: center;
`;
const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 1rem;
`;
const Initials = styled.div`
  position: relative;
  color: white;
  text-transform: capitalize;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;

  background-color: rgba(0, 0, 255, 0.6);
  margin: 2rem 0;
  h1 {
    font-size: 4rem;
    font-weight: 800;
  }
`;
const Text = styled.div`
  margin-left: 2rem;
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const Email = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;
