import { StyledContainer } from "./style";
import { Text, FontSize, FontWeight } from "../../helpers/text";

function Footer() {
  return (
    <StyledContainer>
      <div className="hero-mid-text">
        <Text
          size={FontSize.ExtraRegular}
          weight={FontWeight.Bold}
          color="#ffffff"
        >
          Forever & Always Our Love
        </Text>
        <div className="hero-divider" />
        <Text size={FontSize.Small} weight={FontWeight.Medium} color="#fff">
          - Bansal Family
        </Text>
      </div>
    </StyledContainer>
  );
}

export default Footer;
