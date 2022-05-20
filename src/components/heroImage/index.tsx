import { StyledContainer } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";
import { imgs } from "../../assets/images";

function HeroImage() {
  return (
    <StyledContainer>
      <img src={imgs.bgFlower} alt="" />
      <div className="hero-mid-text">
        <div className="text-title">
          <Text size={FontSize.Large} weight={FontWeight.Bold}>
            Aseem & Tanya
          </Text>
        </div>

        <div className="hero-divider" />

        <div className="text-sub-title">
          <Text size={FontSize.Small} weight={FontWeight.Medium}>
            23 June 2022
          </Text>
        </div>
      </div>
    </StyledContainer>
  );
}

export default HeroImage;
