import React from "react"
import Cart from "../../Assets/CartLogo.png"
import Profile from '../../Assets/ProfileLogo.png'

import { Container } from "./style"


export function Header(){


    return (
        <Container>
            <ContainerLeft>
                <PageLink>
                    
                </PageLink>
            </ContainerLeft>


          <img src={Cart} alt='Carrinho'/>
          <img src={Profile} alt="Profile"/>
        </Container>
    )

}

