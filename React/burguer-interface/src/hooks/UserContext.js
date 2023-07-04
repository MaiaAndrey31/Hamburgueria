import React, {createContext, useContext} from 'react'

import PropTypes from 'propTypes'


const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const user = {}

    return (

        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>)
    }


    export const useUser = () => {
        const context = useContext(UserContext)

        if(context) {
            throw new Error('useUser must be used with UserContext')
        }
    }

    UserProvider.propTypes ={

        children: PropTypes.node 

    }
    
