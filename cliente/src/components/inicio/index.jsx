import { Container } from "./styles";
import { Button } from "../costum/button"
import { Input } from "../costum/input"
import { useState } from "react";

export function IniciarGame({ handleNome }) {
  const [ nome, setNome ] = useState('');

  const enviarNome = () => {
    if(!nome) {
      return alert("Digite um nome")
    }
    handleNome(nome)
  }

  return (
    <Container>
      <h1 className="inicio_titulo">Bem vindo ao Quiz!</h1>
      <div className="input">
        <Input
          type="text"
          placeholder="Digite seu nome"
          evento={(event) => setNome(event.target.value)}
        />
      </div>
      <Button 
        title="Iniciar quiz"
        evento={ enviarNome }
      />
    </Container>
  );
};