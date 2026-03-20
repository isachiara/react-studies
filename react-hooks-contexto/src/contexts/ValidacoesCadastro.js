import React from "react";

// definir as ações do contexto ajuda a não precisar usar um 
// provider pro componente que vai usar o contexto customizado
const ValidacoesCadastro = React.createContext(
  // informações default
  { 
    cpf: semValidacao, 
    senha: semValidacao, 
    nome: semValidacao 
  } 
)

function semValidacao(dados) {
  console.log(dados)
  return { valido: true, texto: "" }
}

export default ValidacoesCadastro