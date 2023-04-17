// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBADTRpng4En-2lYtLcXVElcpnpGHO9btg",
    authDomain: "firecheck-55526.firebaseapp.com",
    projectId: "firecheck-55526",
    storageBucket: "firecheck-55526.appspot.com",
    messagingSenderId: "291761280740",
    appId: "1:291761280740:web:6ce8f5873cec620599bef1"
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));

export default auth;