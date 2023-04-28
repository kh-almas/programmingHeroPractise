import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext} from "./AuthProvider.jsx";
import {child, get, ref} from "firebase/database";
import {database} from "../firebase/firebase.init.js";

export const ProfileDataContext = createContext(null);

const ProfileInfoProvider = ({ children }) => {
    const { user, loading } =useContext(AuthContext);
    const [profileData, setProfileData] = useState({});

    useEffect(()=> {
        // loading(true);
        get(child(ref(database), `users/profile/` + user?.uid)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setProfileData(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [user])



    const result = {
        profileData,
    };

    return (
        <ProfileDataContext.Provider value={result}>
            { children }
        </ProfileDataContext.Provider>
    );
};

export default ProfileInfoProvider;