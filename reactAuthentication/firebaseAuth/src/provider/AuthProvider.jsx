import React, {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import auth from "../firebase/firebase.init.js";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const uid = currentUser?.uid;
            setUser(currentUser);
            console.log(uid);
            console.log(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);
    const userResister = (email, password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        userResister,
        userLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;