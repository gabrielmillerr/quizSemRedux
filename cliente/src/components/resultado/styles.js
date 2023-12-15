import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .resultado_titulo {
    font-size: 2rem;
  }
  .resultado {
    margin: 30px 0;
  }
  .resultado_jogador {
    color: ${({theme}) => theme.COLORS.GREEN};
  }
`;