import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { TextForm } from "../../../../../Components";
import useClickOutside from "../../../../../hooks/useClickOutside";
import { ReactComponent as Arrow } from "../../../../../Images/Directionals/arrow.svg";
import { ReactComponent as SendInviteSvg } from "../../../../../Images/InviteIcon.svg";
import { ReactComponent as Plane } from "../../../../../Images/planeCircle.svg";
import approveBadge from "../../../../../Images/approveBadge.png";
import { mobile } from "../../../../../Utilities/responsive";
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: white;
  border: 0.1rem solid rgba(152, 224, 250, 1);
  box-sizing: border-box;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 4rem;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: 500;
    width: 60%;
    line-height: 3rem;
    margin-top: 3rem;
  }
`;
const Link2 = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: auto;
  h3 {
    font-size: 1.8rem;
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
  position: fixed;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  top: 0;
  right: 0;
  z-index: 10;
  ${mobile({ width: "100%" })}
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
  ${mobile({ width: "40rem" })}
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
