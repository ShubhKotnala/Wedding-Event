import { StyledContainer } from "./style";
import { Text, FontSize } from "../../helpers/text";

function Gallery() {
  return (
    <StyledContainer>
      <Text size={FontSize.ExtraRegular}>
        Our Gallery!
      </Text>
      <div className="detail-form">
          
      </div>
    </StyledContainer>
  );
}

export default Gallery;
