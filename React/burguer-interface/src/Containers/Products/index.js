import React, { useEffect, useState } from 'react'
import productLogo from '../../Assets/ProductsLogo.png'
import api from '../../Services/api'

import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductsContainer } from './style'
import CardProduct from '../../Components/CardProduct'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setactiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadProducts()
    loadCategories()
  }, [])

  return (
    <Container>
      <ProductImg src={productLogo} alt="logo da home" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setactiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {products && products.map(product => (
            <CardProduct key={product.id} product={product} />

        ))}
      </ProductsContainer>
    </Container>
  )
}

export default Products
