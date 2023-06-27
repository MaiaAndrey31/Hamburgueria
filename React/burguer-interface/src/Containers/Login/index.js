import React from 'react'

import {
  Container,
  Background,
  ContainerItems,
 
  Input,
  CadastroLink,
  Button,
  Label,
} from './style'

function Login() {
  return (
    <Container>
      <Background />
      <ContainerItems>
        <img />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Password</Label>
        <Input />

        <Button>Entrar</Button>

        <CadastroLink>
          Ainda não tem cadastro?<a>SignUp</a>
        </CadastroLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
