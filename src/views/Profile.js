import React from 'react'
// AUTH0
import { useAuth0 } from '@auth0/auth0-react'
// Components
import Profile from '../components/Profile/Profile'

const Logout = () => {
    const { isAuthenticated } = useAuth0()

    return (
        <>
            {
                isAuthenticated ?  <Profile userInfo /> 
                :
                <>
                    <h3 style={{color: "rgba(28,105,181,1)", marginTop: "1rem", userSelect:"none"}}>
                        Debe Loguearse para ver esta pagina
                    </h3>
                </>
            }
        </>
    )
}

export default Logout
