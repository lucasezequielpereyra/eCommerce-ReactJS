import React from 'react'
// AUTH0
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <>
            { loginWithRedirect() }
        </>
    )
}

export default Login
