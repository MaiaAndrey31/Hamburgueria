import React from 'react'

import LoginImg from '../../Assets/loginImage.svg'
import Logo from '../../Assets/logo.svg'

import {
  Container,
  LoginImage,
  ContainerItems,
  Input,
  CadastroLink,
  Button,
  Label,
} from './style'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItems>
        <img src={Logo} />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Password</Label>
        <Input />

        <Button>Entrar</Button>

        <CadastroLink>
          Ainda não tem cadastro? <a> SignUp</a>
        </CadastroLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
