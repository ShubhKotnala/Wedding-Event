import styled from "styled-components";
import { imgs } from "../../assets/images";

export const StyledContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imgs.countdownImg});
  height: 20vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .hero-mid-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .hero-divider {
    height: 0.7rem;
  }
`;
