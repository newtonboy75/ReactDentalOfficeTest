import { useAuth } from "./AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRouter = () => {
    let { isLoggedIn } = useAuth();
    console.log(isLoggedIn)
    if(isLoggedIn === false || isLoggedIn === null || isLoggedIn === undefined){
        return <Navigate to={'/'} />
    }
    return <Outlet />
  }