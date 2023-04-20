import React, {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../firebase/firebase.init.js";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const userResister = (email, password) =>
    {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>
    {
        signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        userResister,
        userLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;