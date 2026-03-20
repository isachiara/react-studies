import React, { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes)
  const [erros, setErros] = useState(estadoInicial)

  function validarCampos(event) {
    const { name, value } = event.target
    //com validacoes é um dict de métodos de validação aq
    //é passado o nome do campo (name=cpf) q é como está sendo
    //passado na linha do FormularioCadastro no App.js
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }
  
  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) return false
    }
    return true
  }

  return [erros, validarCampos, possoEnviar]
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {}

  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" }
  }

  return estadoInicial
}

export default useErros