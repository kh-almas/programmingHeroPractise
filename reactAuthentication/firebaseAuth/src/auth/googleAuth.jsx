import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init.js";

const GoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <>
            <button onClick={() => googleLogin()} className="mx-2 text-blue-500 hover:text-blue-600">Google</button>
        </>
    );
};

export default GoogleAuth;