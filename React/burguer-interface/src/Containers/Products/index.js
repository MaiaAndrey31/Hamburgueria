import React, { useEffect, useState } from 'react'
import productLogo from '../../Assets/ProductsLogo.png'
import api from '../../Services/api'

import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from './style'
import CardProduct from '../../Components/CardProduct'
import formatCurrency from '../../utils/FormatCurrency'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredproducts, setFilteredProducts] = useState([])
  const [activeCategory, setactiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if(activeCategory === 0){
      setFilteredProducts(products)
    }
    else {
    const newFilteredProducts = products.filter(
      (product) => product.category_id === activeCategory
    )
    setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={productLogo} alt="logo da home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
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
        {filteredproducts &&
          filteredproducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Products
