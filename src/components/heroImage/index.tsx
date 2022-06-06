/* eslint-disable jsx-a11y/iframe-has-title */
import { StyledContainer } from "./style";

function HeroImage() {
  const id = "1ebnYc7Aj08Pwr7311P1MnSV18snBhXJp";
  const link = `https://docs.google.com/uc?export=open&id=${id}`;

  return (
    <StyledContainer>
      <iframe
        src={link}
        allow="autoplay"
        id="iframeAudio"
        style={{ display: "none" }}
      ></iframe>
      <audio autoPlay id="playAudio">
        <source src={link} type="audio/mp3" />
      </audio>
    </StyledContainer>
  );
}

export default HeroImage;
