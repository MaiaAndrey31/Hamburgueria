import React from "react"
import ProductsLogo from "../../Assets/ProductsLogo.png"

import { Container, LogoImg } from "./style"
import CategoryCarousel from "../../Components/Category Carousel"

function Products(){


    return (
        <Container>
            <LogoImg src={ProductsLogo} alt="logo da Products" />
            <CategoryCarousel />
          
        </Container>
    )

}

export default Products