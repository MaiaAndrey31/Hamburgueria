import React, {useEffect} from "react"
import HomeLogo from "../../Assets/homelogo.jpg"
import api from "../../Services/api"

import { Container, HomeImg } from "./style"
import CategoryCarousel from "../../Components/Category Carousel"

function Home(){


    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoryCarousel />
        </Container>
    )

}

export default Home