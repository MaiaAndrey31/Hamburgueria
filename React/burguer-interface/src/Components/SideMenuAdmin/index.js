import React from 'react'
import { Container, ItemContainer, ListLink } from './style'
import  listLinks  from './menu-list'

export function SideMenuAdmin() {
  return (
    <Container>
      <hr></hr>
      {listLinks.map( item =>(
              <ItemContainer key={item.id}>
        <ListLink to={item.link}>{item.label}</ListLink>
      </ItemContainer>
))}
    </Container>
  )
}
