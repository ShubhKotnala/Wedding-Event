import { StyledContainer } from "./style";
import { Text, FontSize } from "../../helpers/text";

function DjRequests() {
  return (
    <StyledContainer>
      <Text size={FontSize.ExtraRegular} color="#fff">
        Suggest us some songs for DJ night!
      </Text>
      <div className="detail-form">
        <input type="text" placeholder="Your name" className="input" />
        <input type="text" placeholder="Song name" className="input" />
        <button className="button">
          <Text>Submit suggestion</Text>
        </button>
      </div>
    </StyledContainer>
  );
}

export default DjRequests;
