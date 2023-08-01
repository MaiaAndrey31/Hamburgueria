import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductsInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)
    let newCartProduct = []
    if (cartIndex >= 0) {
       newCartProduct = cartProducts

      newCartProduct[cartIndex].quantity =
      newCartProduct[cartIndex].quantity + 1

      setCartProducts(newCartProduct)
    } else {
      product.quantity = 1
      newCartProduct = [...cartProducts, product]
      setCartProducts(newCartProduct)
    }

    await localStorage.setItem('burger:cartInfo', JSON.stringify(newCartProduct))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('burger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node,
}
