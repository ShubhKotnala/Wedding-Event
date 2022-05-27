import styled from "styled-components";
import { imgs } from "../../assets/images";

export const StyledContainer = styled.div`
  height: 20vh;
  background-color: #798D85;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${imgs.footer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
