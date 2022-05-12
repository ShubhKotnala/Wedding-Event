import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  .divider {
    height: 16px;
  }

  .slideshow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px;
  padding: 16px;

  max-width: 300px;
  width: 100%;

  border: 1px solid pink;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 0.5rem;
    height: 3rem;

    & > :not(:last-child) {
      margin-bottom: 0.3rem;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
  }

  .logo {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;
