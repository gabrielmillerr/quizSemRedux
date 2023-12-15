import axios from "axios";

import { useEffect, useState } from "react";
import { Container } from "./styles";

export function TabelaPontuacao() {
  const [resultados, setResultados] = useState([])
  
  useEffect(() => {
    const buscarResultados = async () => {
      try{
        const response = await axios.get("http://localhost:3333/resultado")
        const resultadosOrdenados = response.data.sort((a, b) => b.acertos - a.acertos);
        setResultados(resultadosOrdenados);
      } catch (error) {
        console.error("erro ao buscar resultados dos usuarios", error);
      };
    }
    buscarResultados();
  }, [])

  return (
    <Container>
      <h1>Pontuação</h1>
      {resultados.map((resultado, resultadoIndex) => (
        <div className="resultados" key={resultadoIndex}>
          <p>{resultadoIndex + 1}</p>
          <p> nome: {resultado.nome} </p>
          <p>Acertos: {resultado.acertos}</p>
        </div>
      ))}
    </Container>
  )
}