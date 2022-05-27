import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 4rem;

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

  .dot-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active,
  .dot:hover {
    background-color: #717171;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
   

  margin: 16px;
  padding: 16px;

  max-width: 200px;
  width: 100%;

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
    width: 100%;
    height: 200px;
  }
`;
