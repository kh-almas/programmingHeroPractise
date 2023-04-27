import React, {useState} from 'react';
import auth from "../firebase/firebase.init.js";
import { sendSignInLinkToEmail } from "firebase/auth";

const PasswordLessAuthForm = () => {
    const [errors, setErrors] = useState('');

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:5173/',
        // This must be true.
        handleCodeInApp: true,
        // iOS: {
        //     bundleId: 'com.example.ios'
        // },
        // android: {
        //     packageName: 'com.example.android',
        //     installApp: true,
        //     minimumVersion: '12'
        // },
        // dynamicLinkDomain: 'example.page.link'
    };
    const guestAction = event => {
        event.preventDefault();
        const email = event.target.email.value;
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                console.log('check local storage');
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode);
            });
    }
    return (
        <>
            <p>{errors}</p>
            <form onSubmit={guestAction}>
                <input name="email" type="email" placeholder="Email" className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"/>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Browse as a guest
                </button>
            </form>
        </>
    );
};

export default PasswordLessAuthForm;