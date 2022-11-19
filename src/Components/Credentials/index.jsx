import axios from "axios";
import styled from "styled-components";
import { ReactComponent as EditDP } from "../../Images/EditIcon.svg";
import { BaseUrl } from "../../Utilities";
import { mobile } from "../../Utilities/responsive";

export const Credentials = ({ firstName, lastName, email, onChange, url }) => {
  return (
    <Container>
      <Initials img={url}>
        {!url && (
          <h1>
            {firstName[0]}
            {lastName[0]}
          </h1>
        )}

        <Icon>
          <EditDP width={"2.5rem"} height={"2.5rem"} />
          <FileInput type={"file"} onChange={onChange} accept="image/*" />
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
  ${mobile({
    marginLeft: "0"
  })}
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
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  ${mobile({
    width: "8rem",
    height: "8rem"
  })}

  background-color: rgba(0, 0, 255, 0.6);
  margin: 2rem 0;
  h1 {
    font-size: 4rem;
    font-weight: 800;
    ${mobile({
      fontSize: "3rem"
    })}
  }
`;
const Text = styled.div`
  margin-left: 2rem;
  ${mobile({
    marginLeft: "1rem"
  })}
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: capitalize;
  ${mobile({
    fontSize: "2rem"
  })}
`;

const Email = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.5rem;
  ${mobile({
    fontSize: "1.2rem"
  })}
`;

const FileInput = styled.input`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  position: absolute;
  left: 0;
`;
