import axios from "axios"

import { Container } from "./styles";
import { Button } from "../../components/costum/button"
import { useEffect, useState } from "react";

export function GameQuiz( {enviarOpcoes, alterarTela} ) {
  const [ indexAtual, setIndex ] = useState(0) 
  const [ questoes, setQuestoes ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const buscarQuestoes = async () => {
      try {
        const response = await axios.get("http://localhost:3333/quiz/");
        setQuestoes(response.data[0])
        setLoading(false)
      }
      catch (error) {
        console.error("Erro ao obter questoes:", error);
      }
    }
    buscarQuestoes();
  }, []);

  const handleAnswer = (opcao, pergunta) => {
    enviarOpcoes(opcao, pergunta)

    if(indexAtual >= questoes.questoes.length - 1) {
      alterarTela("resultado")
    }

    setIndex(indexAtual + 1)
  }

  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    
    <Container>
      <h2>{ questoes.questoes[indexAtual].pergunta }</h2>
      {questoes.questoes[indexAtual].opcoes.map((opcao, opcaoIndex) => (
        <Button 
          title={opcao.opcao} 
          key={opcaoIndex}
          evento={() => handleAnswer(opcao, questoes.questoes[indexAtual])}
        />
      ))}
      <span className="numeroDeQuestao">Questão {indexAtual + 1} de {questoes.questoes.length}</span>
    </Container>
  )
}