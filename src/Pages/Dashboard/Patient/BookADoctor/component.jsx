import {
  ButtonSection,
  CardHeader,
  DisplayPic,
  DoctorCard,
  MiddleSection,
  NameDiv,
  TextSection,
  Rating
} from "./style";
import { ReactComponent as RatingStar } from "../../../../Images/RatingStar.svg";
import { ReactComponent as LocationIcon } from "../../../../Images/locationIcon.svg";
import { Button } from "../../../../Components";

export const DoctorCardItem = ({ name, specialty, location, rating }) => {
  return (
    <DoctorCard>
      <CardHeader>
        <div>
          <DisplayPic />
          <NameDiv>
            <h1>{name}</h1>
            <h2>{specialty}</h2>
          </NameDiv>
        </div>
        <Rating>
          <RatingStar />
          <h4>{rating}</h4>
        </Rating>
      </CardHeader>
      <MiddleSection>
        <div>
          <LocationIcon />
          <h2>Lagos,Nigeria</h2>
        </div>
        <h1>N 5,000</h1>
      </MiddleSection>
      <TextSection>
        I’m a consultant with 27 years experience who is also pationate about my
        patients.
      </TextSection>
      <ButtonSection>
        <Button
          bgColor={"white"}
          color="rgba(0, 0, 255, 1)"
          border={" 1px solid rgba(0, 0, 255, 1)"}
          text="View Profile"
          fontSize="1.2rem"
        />
        <Button text="Book Doctor" fontSize="1.2rem" />
      </ButtonSection>
    </DoctorCard>
  );
};
