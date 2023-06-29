import React from 'react'
import PropTypes from 'prop-types'
import {ContainerButton} from './styles'

function Button({children}){
return <ContainerButton>{children}</ContainerButton>
}

export default Button

Button.PropTypes ={
    children: PropTypes.string
}