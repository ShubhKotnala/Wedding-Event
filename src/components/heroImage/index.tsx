/* eslint-disable jsx-a11y/iframe-has-title */
import { StyledContainer } from "./style";
import song from "../../assets/mp3/song.mp3";

function HeroImage() {
  const url =
    "https://www.youtube.com/watch?v=rtOvBOTyX00";

  return (
    <StyledContainer>
      <iframe
        src={require("../../assets/mp3/song.mp3")}
        allow="autoplay"
        id="audio"
        style={{ display: "none" }}
      ></iframe>
      <audio autoPlay controls>
        <source src={require("../../assets/mp3/song.mp3")} type="audio/mp3" />
      </audio>
    </StyledContainer>
  );
}

export default HeroImage;
