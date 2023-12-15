import styled from "styled-components"

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .cardQuiz {
    max-width: 500px;
    width: 100%;
    height: 420px;
    text-align: center;
    border: solid 2px ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 10px;
    padding: 30px;
  }
`;