import { createContext, useState } from "react";
import authService from "../services/authService";


const AuthContext = createContext({});

function AuthProvider({children}){
    const [authData,setAuthData]= useState(undefined)
    async function login(username, password){
        setAuthData(true)
        const _authData = await authService(username,password)
        setAuthData(_authData)
    }

    function logout(){
        setAuthData(undefined)
    }

    return(
        <AuthContext.Provider value={{authData,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider}