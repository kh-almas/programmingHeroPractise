import React from 'react';
import {sendPasswordResetEmail} from "firebase/auth";
import auth from "../firebase/firebase.init.js";

const ResetPassword = ({ emailRef }) => {
    const resetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('check your email');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }

    return (
        <div className="text-center">
            <button onClick={resetPassword} className="py-2 px-4 rounded-md">
                Reset password
            </button>
        </div>
    );
};

export default ResetPassword;