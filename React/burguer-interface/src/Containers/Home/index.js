import React from "react"
import HomeLogo from "../../Assets/homelogo.jpg"

import { Container, HomeImg } from "./style"
import CategoryCarousel from "../../Components/Category Carousel"
import OffersCarousel from "../../Components/Offers Carousel"

function Home(){


    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoryCarousel />
            <OffersCarousel/>
        </Container>
    )

}

export default Home