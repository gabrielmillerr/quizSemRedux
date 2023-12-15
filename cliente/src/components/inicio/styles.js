import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  
  .inicio_titulo {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  .input {
    margin-bottom: 20px;
  }
`;