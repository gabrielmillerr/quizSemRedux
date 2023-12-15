import styled from "styled-components";

export const Container = styled.div`
  .resultados {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 15px;
    border: 2px solid ${({theme}) => theme.COLORS.GREEN};
    border-radius: 8px;
  }
`