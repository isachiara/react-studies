import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (possoEnviar()) {
        aoEnviar({ usuario, senha })
      }
    }}>
      <TextField
        value={usuario}
        onChange={(event) => { setUsuario(event.target.value) }}
        id="usuario"
        label="Usuário"
        name="usuario"
        variant="outlined"
        margin="normal"
        type="email"
        required
        fullWidth />
      <TextField
        value={senha}
        onChange={(event) => { setSenha(event.target.value) }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="Senha"
        name="senha"
        variant="outlined"
        margin="normal"
        required
        type="password"
        fullWidth />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}

export default DadosUsuario;