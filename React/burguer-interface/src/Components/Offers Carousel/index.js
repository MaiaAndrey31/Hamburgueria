import React, { useEffect, useState } from 'react'
import Offer from '../../Assets/OFERTAS.png'
import { Container, ContainerItems, OfferImg, Image, Button } from './style'
import Carousel from 'react-elastic-carousel'
import api from "../../Services/api"


function OffersCarousel() {
  const [categories, setCategories] = useState()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

     

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakpoints = [
    {width: 1, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 900, itemsToShow: 4},
    {width: 1300, itemsToShow: 5}
  ]

  return (
    <Container>
      <OfferImg src={Offer} alt="Ofertas" />

      <Carousel itemsToShow={4} style={{width:'90%'}} breakPoints={breakpoints}>
        {
            categories && categories.map(category => (
                <ContainerItems key={category.id}>
                    <Image src={category.url} alt='imagem da categoria'/>
                    <Button>{category.name}</Button>
                </ContainerItems>
            ))}
       
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
