import styled from "styled-components";
import { imgs } from "../../assets/images";

export const StyledContainer = styled.div`
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   url(${imgs.bgFlower});
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
    // color: white;
  }

  .text-title {
    font-family: "Allura", cursive;
    font-weight: 500;
    font-size: 2px;
    line-height: 1.1;
    color: #fff;
    margin: 0 0 0.4em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    animation-duration: 1s;
    animation-name: slideInUp;
    visibility: visible;

    @keyframes slideInUp {
      0% {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
      }
      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .text-sub-title {
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-left: none;
    border-right: none;
    padding: 1rem 0.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    letter-spacing: 1px;
    font-size: 0.94444rem;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.1;

    animation-delay: 1s;
    animation-name: fadeIn;
    animation-duration: 5s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    // animation: save-the-date-pulse 1s infinite;

    // @keyframes save-the-date-pulse {
    //   0% {
    //     -webkit-transform: scale3d(1, 1, 1);
    //     transform: scale3d(1, 1, 1);
    //   }
    //   50% {
    //     -webkit-transform: scale3d(0.95, 0.95, 0.95);
    //     transform: scale3d(0.95, 0.95, 0.95);
    //   }
    //   100% {
    //     -webkit-transform: scale3d(1, 1, 1);
    //     transform: scale3d(1, 1, 1);
    //   }
    // }
  }

  .hero-divider {
    height: 0.7rem;
  }
`;
