import React from "react"
import { Container } from './style'
import Orders from './Orders'
import { SideMenuAdmin } from "../../Components"

export function Admin(){
 return (

    <Container>
        <SideMenuAdmin/>
        <Orders/>
    </Container>


 )
    
}