import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init.js";

const GoogleSignIn = () => {

    const auth = getAuth(app);
    console.log(auth);
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

export default GoogleSignIn;