import { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handlerLogin = () => {
        setIsLoggedIn(true)
    }
    const handlerLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handlerLogin}>Login</button>
            <button onClick={handlerLogout}>Logout</button>
            { isLoggedIn ? <div>Logged in State</div> : <div>Logged  State</div> }
        </div>
    )
}


export { LoggedIn }