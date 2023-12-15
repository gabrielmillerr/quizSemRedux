import styled from "styled-components";

export const Botao = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GREEN};
  color: ${({theme}) => theme.COLORS.WHITE};
  height: 48px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.2rem;

  &:active {
    opacity: 0.5;
  }
`; 