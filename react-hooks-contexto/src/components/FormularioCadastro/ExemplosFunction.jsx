import React from "react"

function FunctionInvoke() {
  var condicao1;
  return (
    <>
      {(() => {
        if (condicao1) {
          return "caiu na condição 1"
        }
        return "não caiu na condição"
      })()}
    </>
  )
}

function RetornandoCondicao() {
  var condicao1, condicao2, condicao3

  if (condicao1) {
    return "caiu na condição 1"
  } else if (condicao2) {
    return "caiu na condição 2"
  } else if (condicao3) {
    return "caiu na condição 3"
  }

  return (
    <>
      "não caiu em nenhuma condição"
    </>
  )
}

function RetornandoCondicao2(erro, carregando) {
  if (erro) {
    return "Componente deu erro!"
  } else if (carregando) {
    return "Componente carregando..."
  }

  return "Componente funcionando!"
}

function OperadorTernario() {
  var condicao1
  return (
    <>
      {condicao1 ? "Renderizou o que eu quero" : null}
    </>
  )
}

function AndOperadorTernario() {
  var condicao1
  return (
    <>
      {condicao1 && "Renderizou o que eu quero"}
    </>
  )
}