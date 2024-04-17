import { FC, createContext, useContext, useLayoutEffect, useState } from "react"
import { Props, TAuthContext } from "../types/PropTypes"

const AuthContext = createContext<TAuthContext | {}>({
    isLoggedIn: null,
    setIsLoggedIn: (false),
    authUser: '',
    setAuthUser: ('')
})

export const useAuth = () => {
    return useContext(AuthContext) as TAuthContext
}

const AuthProvider: FC<Props>= ({children}) => {
    let creds: string | undefined = localStorage.getItem('loggedInUser') || undefined
    const [authUser, setAuthUser] = useState(creds)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>()
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        if (creds !== undefined){
            setIsLoggedIn(true)
            setAuthUser(creds)   
        }
        setLoading(false)
    }, [])

    const authDetails = {
        isLoggedIn,
        setIsLoggedIn,
        authUser,
        setAuthUser
    }

    return (
        <AuthContext.Provider value={authDetails}>{loading ? 'loading...' : children}</AuthContext.Provider>
    )
}

export default AuthProvider