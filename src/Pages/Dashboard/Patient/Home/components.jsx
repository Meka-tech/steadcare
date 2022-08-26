import React from "react";
import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../../../Images/RatingStar.svg";
import { ReactComponent as BookADoctorSvg } from "../../../../Images/illustrations/BookADoctor.svg";
import { ReactComponent as Arrow } from "../../../../Images/Directionals/arrow.svg";
import { ReactComponent as SendInviteSvg } from "../../../../Images/InviteIcon.svg";

export const DoctorComponent = ({ displayPic, name, rating, book }) => {
  return (
    <DoctorContainer>
      <ProfilePic />
      <Name>{name}</Name>
      <Rating>
        <RatingStar />
        <h4>{rating}</h4>
      </Rating>
      <Button>
        <h5>Book</h5>
      </Button>
    </DoctorContainer>
  );
};

const DoctorContainer = styled.div`
  background-color: white;
  flex-direction: column;
  height: fit-content;
  width: 20rem;
  height: 18rem;
  display: flex;
  align-items: center;
  padding: 1em 0;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 255, 0.9);
  margin-bottom: 2.5rem;
`;
const Name = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5em;
`;

const ProfilePic = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #dbdbdb;
  margin-bottom: 0.5rem;
`;
const Rating = styled.div`
  background-color: rgba(255, 183, 43, 0.2);
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    margin-left: 0.2em;
  }
`;
const Button = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 255, 0.9);
  color: white;
  padding: 0.5em 1em;
  border-radius: 0.5rem;
  font-weight: 600;
  margin-top: 5rem;
  h5 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
  }
`;

export const BookADoctor = () => {
  return (
    <BookADoctorContainer>
      <h1>Enjoy quality healthcare from the comfort of your home</h1>
      <Link>
        <h3>Book a Doctor</h3>
        <Arrow />
      </Link>
      <Svg>
        <BookADoctorSvg />
      </Svg>
    </BookADoctorContainer>
  );
};

const BookADoctorContainer = styled.div`
  border: 0.1rem solid rgba(0, 0, 255, 0.6);
  background-color: rgba(13, 121, 210, 0.05);
  box-shadow: 0px 3px 4px 0px rgba(0, 125, 170, 0.3);
  padding: 1rem 1.5rem;
  height: 18rem;
  width: 45rem;
  border-radius: 1rem;
  position: relative;
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: black;
    width: 80%;
  }
`;
const Svg = styled.div`
  position: absolute;
  bottom: 0;
  right: 2rem;
`;
const Link = styled.div`
  cursor: pointer;
  margin-top: 8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgba(0, 0, 255, 0.9);
    margin-right: 1rem;
  }
`;

export const SendInvite = () => {
  return (
    <SendInviteContainer>
      <SendInviteSvg />
      <h1>Send Invite</h1>
      <h4>Invite family, friends or Doctors to STEADCARE.</h4>
      <Link2>
        <h3>Invite</h3>
        <Arrow />
      </Link2>
    </SendInviteContainer>
  );
};

const SendInviteContainer = styled.div`
  padding: 1rem 1.5rem;
  height: 18rem;
  width: 25rem;
  border-radius: 1rem;
  background-color: white;
  border: 0.1rem solid rgba(152, 224, 250, 1);
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    margin-top: 1rem;
  }
`;
const Link2 = styled.div`
  cursor: pointer;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgba(0, 0, 255, 0.9);
    margin-right: 1rem;
  }
`;
