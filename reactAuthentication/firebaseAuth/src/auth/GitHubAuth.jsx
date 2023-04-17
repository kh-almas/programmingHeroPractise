import React from 'react';
import {GithubAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../firebase/firebase.init.js";

const GitHubAuth = () => {
    const GitHubLogin = () =>{
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.code);
            })
        console.log(provider);
    }
    return (
        <>
            <button onClick={() => GitHubLogin()} className="mx-2 text-blue-500 hover:text-blue-600">GitHub</button>
        </>
    );
};

export default GitHubAuth;