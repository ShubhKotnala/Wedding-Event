import styled from "styled-components";
import { imgs } from "../../assets/images";

export const StyledContainer = styled.div`
  background-image: url(${imgs.heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  .divider {
    height: 16px;
  }
`;
