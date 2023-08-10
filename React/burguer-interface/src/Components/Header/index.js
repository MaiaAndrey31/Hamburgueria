import React from 'react'
import {useHistory} from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import Cart from '../../Assets/CartLogo.png'
import Profile from '../../Assets/ProfileLogo.png'

import { Container, ContainerLeft, ContainerRight, PageLink, ContainerText, Line, PageLinkExit } from './style'

export function Header() {
  const {logout} = useUser()
    const {push, location: {pathname}} = useHistory()

    const LogoutUser =  () => {
      logout()
      push('/login')
    }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
        <PageLink onClick={() => push('/produtos')} isActive={pathname.includes( 'produtos')}>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Profile} alt="Profile" />
        </PageLink>

        <ContainerText>
            <p>Olá Rodolfo</p>
            <PageLinkExit >Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
