import React, { useEffect, useState } from 'react'
import Category from '../../Assets/CATEGORIAS.png'
import { Container, CategoryImg } from './style'
import Carousel from 'react-elastic-carousel'

function CategoryCarousel() {
  const [categories, setCategories] = useState()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      console.log(response)

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <CategoryImg src={Category} alt="Categorias" />

      <Carousel itemsToShow={3}>
        {
            categories && categories.map(category => {
                <div>
                    <img src={category.url} alt='imagem da categoria'/>
                    <button>{category.name}</button>
                </div>
            })
        }
       
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
