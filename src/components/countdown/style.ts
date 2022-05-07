import styled from "styled-components";
import { imgs } from "../../assets/images";

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imgs.countdownImg});
  height: 45vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .adventure-text {
    padding: 3% 5%;
  }

  .waiting-text {
    padding-left: 5%;
    padding-top: 5%;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    margin: 0.5rem;
  }
`;

export const StyledTimerContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  width: 23.5%;
  max-width: 200px;
  float: left;
  text-align: center;
  padding: 15px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  border: 5px solid rgba(0, 0, 0, 0.1);
`;
