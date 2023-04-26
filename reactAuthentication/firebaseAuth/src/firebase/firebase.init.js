// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBADTRpng4En-2lYtLcXVElcpnpGHO9btg",
    authDomain: "firecheck-55526.firebaseapp.com",
    projectId: "firecheck-55526",
    storageBucket: "firecheck-55526.appspot.com",
    messagingSenderId: "291761280740",
    appId: "1:291761280740:web:6ce8f5873cec620599bef1",
    databaseURL: "https://firecheck-55526-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const database = getDatabase(app);


export default auth;