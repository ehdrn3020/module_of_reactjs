import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser|null>(null)

    const handlerLogin = () => {
        setUser ({
            name: 'DGK',
            email: 'dgk@example.com'
        })
    }
    const handlerLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handlerLogin}>Login</button>
            <button onClick={handlerLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}


export { User }