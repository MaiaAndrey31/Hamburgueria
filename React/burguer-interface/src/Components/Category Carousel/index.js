import React from "react"
import Category from "../../Assets/CATEGORIAS.png"
import { Container, CategoryImg} from "./style"


function CategoryCarousel(){

    return (
        <Container>
            <CategoryImg src={Category} alt="Categorias" />
        </Container>
    )

}

export default CategoryCarousel