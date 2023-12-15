import axios from "axios"

import { Container } from "./styles"
import { Button } from "../costum/button"

export function Resultado( {respostasJogador, alterarTela, resultadoJogador} ) {

  const adicionarResultado = async () => {
    try {
      const response = await axios.post("http://localhost:3333/resultado", [resultadoJogador]);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.log("Erro ao buscar resultados", error);
    }
  }

  const entrarTelaPontuação =  () => {
    alterarTela("pontuacao")
  }

  return (
    <Container>
        <h1 className="resultado_titulo">Tela resultado</h1>
        <p className="resultado">Parabéns <span className="resultado_jogador">{ respostasJogador.nome }</span> tu acertou { respostasJogador.acertos } questões.</p>
        <Button
          title={"Adicionar resultado"}
          evento={ adicionarResultado }
        />
        <Button 
          title={"Pontuação"}
          evento={ entrarTelaPontuação }
        />
    </Container>
  )
}