import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  .container {
    margin: 1rem 0;
  }

  .details {
    background-color: rgba(94, 154, 142, 0.05);
    padding: 40px 45px;

    & > div{
      margin-top: 0.7rem;
    }
  }

  .intro-img {
    width: 100%;
    height: 200px;
  }
`;
