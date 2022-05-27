import styled from "styled-components";

export const StyledContainer = styled.div`
margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  .divider {
    height: 2rem;
  }

  .content{
    display: flex;
    flex-direction: row;
    justidy-content: space-between;
    align-items: center;
  }

  .headerImg {
    width: 100%;
    max-height: 400px;
    max-width: 400px;
  }

  .logoImg {
    margin-right: 1rem;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #e3dcdc;
  }

  .content-details{
    max-width: 50%;
  }
`;
