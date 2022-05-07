import { StyledContainer } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";

function HeroImage() {
  return (
    <StyledContainer>
      <div className="hero-mid-text">
        <Text size={FontSize.Large} weight={FontWeight.Bold} color="#fff">
          Aseem & Tanya
        </Text>
        <div className="hero-divider" />
        <Text size={FontSize.Small} weight={FontWeight.Medium} color="#fff">
          WE"RE GETTING MARRIED
        </Text>
      </div>

      <div className="hero-bottom-text">
        <Text color="#fff">Save the date</Text>
        <div className="hero-divider" />
        <Text size={FontSize.Mini} weight={FontWeight.Light} color="#fff">
          23 June 2022
        </Text>
      </div>
    </StyledContainer>
  );
}

export default HeroImage;
