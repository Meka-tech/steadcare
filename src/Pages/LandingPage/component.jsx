import { Button } from "../../Components";
import { BannerDiv, BannerImage, Desc, Title } from "./style";

export const Banner = ({ title, desc, button = false, img }) => {
  return (
    <BannerDiv>
      <BannerImage>{img}</BannerImage>
      {title ? <Title>{title}</Title> : null}
      {desc ? <Desc>{desc}</Desc> : null}
      {button ? <Button text="Book a Doctor" style={{ zIndex: 1 }} /> : null}
    </BannerDiv>
  );
};
