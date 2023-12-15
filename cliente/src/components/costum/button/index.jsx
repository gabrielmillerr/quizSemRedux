import { Botao } from "./styles";

export function Button({ title, evento }) {
  return(
  <Botao 
    type="button"
    onClick={evento}
  > { title } </Botao>
  );
}