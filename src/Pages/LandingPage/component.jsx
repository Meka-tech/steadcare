import { Button } from "../../Components";
import { BannerDiv, Desc, Title } from "./style";

export const Banner = ({ title, desc, button = false, img }) => {
  return (
    <BannerDiv img={img}>
      {title ? <Title>{title}</Title> : null}
      {desc ? <Desc>{desc}</Desc> : null}
      {button ? <Button text="Book a Doctor" style={{ zIndex: 1 }} /> : null}
    </BannerDiv>
  );
};
