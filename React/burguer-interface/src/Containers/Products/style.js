import styled from 'styled-components'

export const Container = styled.div `
background: #e5e5e5;
`

export const ProductImg = styled.img `
width: 100%; 
`
export const CategoriesMenu = styled.div `
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;
`


export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
color: ${props => props.isActiveCategory ? '#9758a6' : '#9a9a9d'} ;
font-size: 18px;
line-height: 20px;
padding-bottom: 5px;
`

export const ProductsContainer = styled.div``