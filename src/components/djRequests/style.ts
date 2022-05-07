import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: rgba(94, 154, 142, 1);
  padding: 40px;
  
  .input {
    width: 70%;
    border: none;
    outline: none;
    padding: 1rem;
    margin: 0.5rem 0;
  }

  .button {
    background-color: white;
    color: rgba(94, 154, 142, 1);
    border: none;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  .detail-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`;
