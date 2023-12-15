import { Container } from "./styles";
import { IniciarGame } from "../../components/inicio"
import { GameQuiz } from "../../components/game"
import { Resultado } from "../../components/resultado"
import { TabelaPontuacao } from "../../components/tabela"

import { useState } from "react";

export function QuizGame() {
  const [telaAtual, setTelaAtual] = useState("inicial")
  const [respostas, setRepostas] = useState({
    nome: "",
    acertos: 0,
    answers: []
  });

  const enviarNome = (nomeJogador) => {
    setRepostas({
      ...respostas,
      nome: nomeJogador
    })
    setTelaAtual("quiz")
  } 
  const enviarRepostas = (opcao, pergunta) => {
    setRepostas((state) => ({
      ...state,
      answers: [...state.answers, { _perguntaId: pergunta._id, _opcaoID: opcao._id }],
      acertos: opcao.resposta ? state.acertos + 1 : state.acertos,
    }));

  };

  const alterarTela = (tela) => {
    setTelaAtual(tela)
  }

  return (
    <Container>
      <div className="cardQuiz">
      { telaAtual === "inicial" && <IniciarGame handleNome = { enviarNome } />}
      { telaAtual === "quiz" && <GameQuiz enviarOpcoes = { enviarRepostas }  alterarTela = { alterarTela }/>}
      { telaAtual === "resultado" && <Resultado respostasJogador = { respostas } alterarTela = { alterarTela } resultadoJogador={ respostas }/>}
      { telaAtual === "pontuacao" && <TabelaPontuacao/> }
      </div>
    </Container>
  );
}
