import React from "react"
import HomeLogo from "../../Assets/homelogo.jpg"

import { Container, HomeImg } from "./style"
import {CategoryCarousel, OffersCarousel } from "../../Components"
import { Header } from "../../Components"

export function Home(){


    return (
        <Container>
            <Header/>
            <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoryCarousel />
            <OffersCarousel/>
        </Container>
    )

}

