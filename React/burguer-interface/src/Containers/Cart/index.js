import React from "react"
import CartLogo from "../../Assets/CartImage.png"

import { Container, CartImg } from "./style"
import {CartItems  } from "../../Components"

export function Cart(){


    return (
        <Container>
            <CartImg src={CartLogo} alt="logo da Cart" />
           <CartItems/>
        </Container>
    )

}

