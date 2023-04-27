import React, {useContext, useState} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from "../firebase/firebase.init.js";
import {AuthContext} from "../provider/AuthProvider.jsx";

const Login = () => {
    const [errors, setErrors] = useState('');
    const { userLogin } = useContext(AuthContext);
    const userLoginAction = event => {
    event.preventDefault();
    setErrors('');
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.reset();

    //get this function from context
        userLogin(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors(errorCode);
            console.log(errorCode, errorMessage)
        });
}
    return (
        <>
            <p>{errors}</p>
            <form onSubmit={userLoginAction}>
                <input name="email" type="email" placeholder="Email" className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"/>
                <input name="password" type="password" placeholder="Password" className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"/>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Sign In
                </button>
            </form>
        </>
    );
};

export default Login;