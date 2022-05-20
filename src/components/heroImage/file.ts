import styled from "styled-components";
import { imgs } from "../../assets/images";

export const StyledContainer = styled.div`
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   url(${imgs.heroImg});
  height: 100vh;
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

  .hero-bottom-text {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -0%);
    background-color: rgba(94, 154, 142, 1);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    color: white;
    text-align: center;

    padding: 2rem;
    padding-bottom: 1rem;
  }

  .hero-divider {
    height: 0.7rem;
  }
`;
