import React, {useContext, useEffect, useState} from "react";
import "tailwindcss/tailwind.css";
import {AuthContext} from "../provider/AuthProvider.jsx";
import {database} from "../firebase/firebase.init.js";
import { getDatabase, ref, child, get } from "firebase/database";

function ProfileInfoView() {
    const [profileData, setProfileData] = useState({});
    const { user, loading } =useContext(AuthContext);

    useEffect(()=> {
        // const dbRef = ref(getDatabase());
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
    // const profileData = {};
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-5">
                <img
                    className="w-20 h-20 rounded-full mr-5"
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                    alt="Profile"
                />
                <div>
                    <h1 className="font-bold text-xl">{profileData?.firstName} {profileData?.lastName}</h1>
                    <p className="text-gray-600">{profileData?.username}</p>
                </div>
            </div>
            <div className="mb-5">
                <h2 className="font-bold mb-3">About Me</h2>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    suscipit metus vel tortor gravida congue. Nullam at velit ut velit
                    ultrices vulputate euismod ut ante. Etiam posuere venenatis lacinia.
                    Etiam vel enim ut mauris tempor finibus vitae a eros. Sed eu arcu quis
                    felis malesuada tincidunt sed eu nibh. Morbi aliquet turpis sit amet
                    lectus rutrum, nec commodo metus euismod. Donec et mauris blandit,
                    vestibulum sapien sed, pellentesque velit. Integer sit amet felis vel
                    quam placerat luctus. Praesent eget erat ut urna venenatis vehicula
                    ac eu dui. Sed cursus sapien velit, id maximus nisl dictum eu. Donec
                    at risus elit. Morbi vestibulum purus eu ligula venenatis
                    condimentum.
                </p>
            </div>
            <div>
                <h2 className="font-bold mb-3">Contact Information</h2>
                <ul className="list-disc ml-5">
                    <li className="text-gray-600">Email: {profileData?.email}</li>
                    <li className="text-gray-600">Phone: {profileData?.phone}</li>
                    <li className="text-gray-600">Address: {profileData?.address}, {profileData?.state}, {profileData?.zipCode}, {profileData?.country}</li>
                    <li className="text-gray-600">Website: {profileData?.website}</li>
                    <li className="text-gray-600">Facebook: {profileData?.facebook}</li>
                    <li className="text-gray-600">Instagram: {profileData?.instagram}</li>
                    <li className="text-gray-600">LinkedIn: {profileData?.linkedin}</li>
                    <li className="text-gray-600">GitHub: {profileData?.github}</li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfoView;
