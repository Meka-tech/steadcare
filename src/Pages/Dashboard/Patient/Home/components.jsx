import React, { useRef } from "react";
import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../../../Images/RatingStar.svg";
import { ReactComponent as BookADoctorSvg } from "../../../../Images/illustrations/BookADoctor.svg";
import { ReactComponent as Arrow } from "../../../../Images/Directionals/arrow.svg";
import { ReactComponent as SendInviteSvg } from "../../../../Images/InviteIcon.svg";
import useClickOutside from "../../../../hooks/useClickOutside";
import { TextForm } from "../../../../Components";
import { ReactComponent as Plane } from "../../../../Images/planeCircle.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import approveBadge from "../../../../Images/approveBadge.png";
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
  const Navigate = useNavigate();
  return (
    <BookADoctorContainer>
      <h1>Enjoy quality healthcare from the comfort of your home</h1>
      <Link
        onClick={() => {
          Navigate("/patient/home/book-a-doctor");
        }}
      >
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

export const SendInvite = ({ setActive }) => {
  return (
    <SendInviteContainer>
      <SendInviteSvg />
      <h1>Send Invite</h1>
      <h4>Invite family, friends or Doctors to STEADCARE.</h4>
      <Link2
        onClick={() => {
          setActive(true);
        }}
      >
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

export const InviteModal = ({ setActive, value = "" }) => {
  const ModalRef = useRef();
  const [linkCopied, setLinkCopied] = useState(false);
  useClickOutside(ModalRef, () => setActive(false));
  return (
    <Shade>
      <ModalContainer ref={ModalRef}>
        {linkCopied ? (
          <>
            <LinkCopiedDiv>
              <ImageContainer>
                <img src={approveBadge} alt="success" />
              </ImageContainer>
              <h1>Link Copied Sucessfully</h1>
            </LinkCopiedDiv>
          </>
        ) : (
          <>
            <ModalHeader>Invite people to Steadcare</ModalHeader>
            <ModalDetails>
              <ModalDetail>
                <ModalDetailHeader>
                  Insert email address and send invitation
                </ModalDetailHeader>
                <TextForm
                  fontSize={"1.2rem"}
                  borderRadius={"2rem"}
                  placeholder={"Enter email address"}
                  height={"3.5em"}
                  icon={<Plane />}
                />
              </ModalDetail>
              <ModalDetail>
                <ModalDetailHeader>
                  Copy referral link and share with family & friends
                </ModalDetailHeader>
                <TextForm
                  backgroundColor={"rgba(0, 0, 255, 0.1)"}
                  fontSize={"1.2rem"}
                  onChange={() => {}}
                  value={`${value}`}
                  borderRadius={"2rem"}
                  height={"3.5em"}
                  icon={
                    <CopyLink
                      onClick={() => {
                        setLinkCopied(true);
                        navigator.clipboard.writeText(value);
                      }}
                    >
                      Copy Link
                    </CopyLink>
                  }
                />
              </ModalDetail>
            </ModalDetails>
          </>
        )}
      </ModalContainer>
    </Shade>
  );
};

const Shade = styled.div`
  position: absolute;
  width: 100%;
  height: 90rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  top: 0;
  left: 0;
  z-index: 10;
`;
const ModalContainer = styled.div`
  height: 30rem;
  width: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 255, 1);
  padding: 2rem;
`;

const ModalHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  margin-top: 0.5rem;
  font-weight: 500;
  color: black;
`;

const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin-top: 3rem;
  height: 20rem;
`;
const ModalDetail = styled.div``;

const ModalDetailHeader = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin: auto 0;
  color: rgba(85, 85, 85, 1);
  text-align: center;
`;

const CopyLink = styled.div`
  cursor: pointer;
  font-size: 1rem;
  color: rgba(0, 0, 255, 1);
  font-weight: 600;
  margin-right: 0.1rem;
  font-family: Montserrat;
`;
const LinkCopiedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 500;
    font-size: 1.6rem;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
