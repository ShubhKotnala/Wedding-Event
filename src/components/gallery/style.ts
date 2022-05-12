import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  .viewButton {
    background-color: #cd5454;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-top: 3rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .viewButton:hover {
    opacity: 0.9;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
  }

  .column {
    flex: 25%;
    max-width: 24%;
    padding: 0 4px;
  }

  .img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    max-height: 400px;
  }

  @media screen and (max-width: 900px) {
    .column {
      flex: 50%;
      max-width: 48%;
    }
  }

  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 99%;
    }
  }
`;
