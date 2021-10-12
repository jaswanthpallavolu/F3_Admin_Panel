import React, { useContext, createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const MyContext = createContext()

export const useMyContext = () => {
    return useContext(MyContext)
}

export function MyContextProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()


    function Login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function Logout() {
        return auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    }, [])

    const secure = {
        Login,
        Logout,
        currentUser,
        setCurrentUser
    }

    return (
        <MyContext.Provider value={{ secure: secure }}>
            {!loading && children}
        </MyContext.Provider>
    )
}
