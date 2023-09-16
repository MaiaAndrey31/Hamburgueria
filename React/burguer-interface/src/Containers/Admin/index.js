import React from "react"
import { Container, ContainerItems } from './style'
import ListProducts from "./ListProducts"
// import Orders from './Orders'
import { SideMenuAdmin } from "../../Components"

export function Admin(){
 return (

    <Container>
        <SideMenuAdmin/>
        <ContainerItems>
        <ListProducts/>
        {/* <Orders/> */}
        </ContainerItems>
       
    </Container>


 )
    
}