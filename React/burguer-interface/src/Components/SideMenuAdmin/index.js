import React from 'react'
import {useUser} from '../../hooks/UserContext'
import { Container, ItemContainer, ListLink } from './style'
import  listLinks  from './menu-list'
import LogoutIcon from '@mui/icons-material/Logout';

export function SideMenuAdmin() {
  const {logout} = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map( item =>(
              <ItemContainer key={item.id} isActve={true}>
                <item.icon className='icon'/>
        <ListLink to={item.link}>{item.label}</ListLink>
      </ItemContainer>
))}<hr></hr>
<ItemContainer style={{position: 'absolute', bottom: '30px' }}>
  <LogoutIcon style={{color:'#ffffff'}}/>
  <ListLink to='/login' onClick={logout} >Sair</ListLink>
</ItemContainer>
    </Container>
  )
}
