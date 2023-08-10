import React from "react"
import {Route, Redirect} from "react-router-dom"
import PropTypes from "prop-types"
import { Header } from "../Components"

function PrivateRoutes({component, ...rest}){
const user = localStorage.getItem('burger:userInfo')

if (!user){

    return <Redirect to="/login" />
    
}

return ( 
<>
<Header/>
<Route {...rest} component={component} />
</>

)


}

export default PrivateRoutes

PrivateRoutes.propTypes={
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}