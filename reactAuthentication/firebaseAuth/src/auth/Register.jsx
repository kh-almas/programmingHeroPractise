import React, {useContext, useRef, useState} from 'react';
import {
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";
import ResetPassword from "./ResetPassword.jsx";
import {AuthContext} from "../provider/AuthProvider.jsx";
import {Link} from "react-router-dom";

const Register = () => {
    const [errors, setErrors] = useState('');
    const emailRef = useRef();
    const { userResister } = useContext(AuthContext);
    const addNewUser = (event) => {
        // const newPassword = getASecureRandomPassword();

        event.preventDefault();
        setErrors('');
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        event.target.reset();

        //get this function from context
        userResister(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUser(user, name);
                userVerificationByEmail(user);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrors(errorCode);
                console.log(errorCode, errorMessage)
            });


    }
    const updateUser = (user, name) => {
        updateProfile(user, {
            displayName: name,
        }).then(() => {
            console.log('profile updated');
        }).catch((error) => {
            setErrors(error.code);
            console.log(error.code)
        });
    }
    const userVerificationByEmail = (user) => {
        sendEmailVerification(user)
            .then(() => {
                console.log('email sent');
            }).catch((error) => {
                setErrors(error.code);
                console.log(error.code)
            });
    }


    return (
        <>
            <p>{errors}</p>
            <form onSubmit={addNewUser}>
                <input name="name" type="name" placeholder="Name" className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"/>
                <input name="email" ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"/>
                <input name="password" type="password" placeholder="Password" className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"/>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
            <Link to={'/guest'} className="block text-center w-full mt-4 py-2 px-4 rounded-md border">
                Continue as a guest
            </Link>
            <ResetPassword emailRef={emailRef}/>
        </>
    );
};

export default Register;