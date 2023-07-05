import React, {createContext, useContext} from 'react'

import PropTypes from 'prop-types'


const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const user = {name: "Maia", age: 55}

    return (

        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>)
    }


    export const useUser = () => {
        const context = useContext(UserContext)

        if(!context) {
            throw new Error('useUser must be used with UserContext')
        }

        return context
    }

    UserProvider.propTypes ={

        children: PropTypes.node 

    }
    
