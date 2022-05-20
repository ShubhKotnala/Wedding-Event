import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .card-container {
    margin: 1rem;
    margin-top: 56px;
    padding: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(94, 154, 142, 0.05);
    border: 1px solid grey;
    box-shadow: inset 0 0 0 4px #eee, inset 0 0 0 2px #ddd, inset 0 0 0 4px #ccc,
      inset 0 0 0 2px #bbb, inset 0 0 0 2px #aaa, inset 0 0 0 2px #999,
      inset 0 0 0 2px #888;

    & > div {
      margin: 0.7rem;
    }
  }

  .intro-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: -70px;
    margin-bottom: 0.7rem;
  }

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }
`;
