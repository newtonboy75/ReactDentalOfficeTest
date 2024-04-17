export type TAuthContext = {
    isLoggedIn: boolean | null,
    setIsLoggedIn: (val: boolean) => boolean,
    authUser: string,
    setAuthUser: (val: string) => string
 }

 export type Props = {
    children: React.ReactNode
 }

 export type loginDetails = {
   email: string,
   password: string
 }