import React from "react"
import {Route, Redirect} from "react-router-dom"
import PropTypes from "prop-types"

function PrivateRoutes({component, ...rest}){
const user = localStorage.getItem('burger:userInfo')

if (!user){

    return(
        <Redirect to="/login" />
    )
}


}

export default PrivateRoutes

PrivateRoutes.PropTypes={
    component: PropTypes.oneOfType([PropTypes.function, PropTypes.element])
}