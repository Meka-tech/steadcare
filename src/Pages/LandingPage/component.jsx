import { useNavigate } from "react-router";
import { Button } from "../../Components";
import { BannerDiv, Desc, Title } from "./style";

export const Banner = ({ title, desc, button = false, img }) => {
  const navigate = useNavigate();
  return (
    <BannerDiv img={img}>
      {title ? <Title>{title}</Title> : null}
      {desc ? <Desc>{desc}</Desc> : null}
      {button ? (
        <Button
          text="Book a Doctor"
          onClick={() => navigate("/login")}
          style={{ zIndex: 1 }}
        />
      ) : null}
    </BannerDiv>
  );
};
