import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"


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
  ErrorMessage
} from './style'

function Login() {

  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatório').min(6, 'Mínimo 6 digitos'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  

  const onSubmit = (data) => console.log(data)
  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItems>
        <img src={Logo} />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message}/>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input type='password' {...register('password')} error={errors.password?.message}/>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
        </form>
        <CadastroLink>
          Ainda não tem cadastro? <a> SignUp</a>
        </CadastroLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
