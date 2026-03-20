import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";

//set NODE_OPTIONS=--openssl-legacy-provider

// propriedades que ele não faz nada com elas, 
// o único que ele faz é repassar essas propriedades para os componentes filhos dele.
// Essa maneira de trabalhar com propriedades 
// é chamada de prop drilling e é considerada uma má prática. 

function FormularioCadastro({ aoEnviar/**, validacoes */ }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({})

  useEffect(() => {
    //Ciclo de vida do componente:
    //Quando o componente for atualizado ao mudar de formulario 
    //ou apenas iniciado esse console.log será chamado
    console.log(dadosColetados)

    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })


  // Uso de um array em vez de um switch case é uma boa prata
  // para evitar code smell
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} /** validacoes={validacoes} */ />,
    <DadosPessoais aoEnviar={coletarDados} /** validacoes={validacoes} */ />,
    <DadosEntrega aoEnviar={aoEnviar} /** validacoes={validacoes} */ />,
    <Typography variant="h5">Cadastro finalizado!</Typography>
  ]

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados })

    //Este console.log não printará o valor atualizado pois 
    //a função "set.." de um useState é assíncrona, ou seja,
    // não irá esperar a execução dela para ir para a proxima linha
    console.log(dadosColetados)
    proximaEtapa()
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1)
  }

  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;