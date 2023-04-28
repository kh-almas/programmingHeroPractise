import React, {useContext, useEffect, useState} from 'react';
import {database} from "../firebase/firebase.init.js";
import { ref, set } from "firebase/database";
import {AuthContext} from "../provider/AuthProvider.jsx";
import {ProfileDataContext} from "../provider/ProfileInfoProvider.jsx";


const ProfileForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [alternativeEmail, setAlternativeEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [website, setWebsite] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [about, setAbout] = useState('');

    const { user, updateUser } = useContext(AuthContext);
    const { profileData } = useContext(ProfileDataContext);

    useEffect(() => {
        setFirstName(profileData?.firstName);
        setLastName(profileData?.lastName);
        setUsername(user?.displayName);
        setAlternativeEmail(profileData?.alternativeEmail);
        setPhone(profileData?.phone);
        setAddress(profileData?.address);
        setZipCode(profileData?.zipCode);
        setWebsite(profileData?.website);
        setState(profileData?.state);
        setCountry(profileData?.country);
        setFacebook(profileData?.facebook);
        setInstagram(profileData?.instagram);
        setLinkedin(profileData?.linkedin);
        setGithub(profileData?.github);
        setProfileImage(profileData?.profileImage);
        setAbout(profileData?.about);
    }, [profileData]);

    const handleSubmit = (event) => {
        event.preventDefault();

        set(ref(database, 'users/profile/' + user?.uid), {
            firstName,
            lastName,
            alternativeEmail,
            phone,
            address,
            zipCode,
            website,
            state,
            country,
            facebook,
            instagram,
            linkedin,
            github,
            profileImage,
            about,
        });

        updateUser(user, username);
    };

    const firstNameInput = e => {
        console.log(e.target.value);
        setFirstName(e.target.value);
    }
    const lastNameInput = e => {
        console.log(e.target.value);
        setLastName(e.target.value);
    }
    const usernameInput = e => {
        console.log(e.target.value);
        setUsername(e.target.value);
    }
    const alternativeEmailInput = e => {
        console.log(e.target.value);
        setAlternativeEmail(e.target.value);
    }
    const phoneInput = e => {
        console.log(e.target.value);
        setPhone(e.target.value);
    }
    const addressInput = e => {
        console.log(e.target.value);
        setAddress(e.target.value);
    }
    const zipCodeInput = e => {
        console.log(e.target.value);
        setZipCode(e.target.value);
    }
    const websiteInput = e => {
        console.log(e.target.value);
        setWebsite(e.target.value);
    }
    const stateInput = e => {
        console.log(e.target.value);
        setState(e.target.value);
    }
    const countryInput = e => {
        console.log(e.target.value);
        setCountry(e.target.value);
    }
    const facebookInput = e => {
        console.log(e.target.value);
        setFacebook(e.target.value);
    }
    const instagramInput = e => {
        console.log(e.target.value);
        setInstagram(e.target.value);
    }
    const linkedinInput = e => {
        console.log(e.target.value);
        setLinkedin(e.target.value);
    }
    const githubInput = e => {
        console.log(e.target.value);
        setGithub(e.target.value);
    }
    const profileImageInput = e => {
        console.log(e.target.value);
        setProfileImage(e.target.value);
    }
    const aboutInput = e => {
        console.log(e.target.value);
        setAbout(e.target.value);
    }

    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1>
            <div className="w-1/2 mx-auto mt-6 bg-gray-200 p-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                        <input value={firstName} onChange={firstNameInput} type="text" id="firstName" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                        <input value={lastName} onChange={lastNameInput} type="text" id="lastName" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input value={username} onChange={usernameInput} type="text" id="username" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="alternativeEmail" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input value={alternativeEmail} onChange={alternativeEmailInput} type="email" id="alternativeEmail" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input value={phone} onChange={phoneInput} type="tel" id="phone" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                        <input value={address} onChange={addressInput} type="text" id="address" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">Zip / Postal Code</label>
                        <input value={zipCode} onChange={zipCodeInput} type="text" id="zipCode" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                        <input value={website} onChange={websiteInput} type="url" id="website" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                        <input value={state} onChange={stateInput} type="text" id="state" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                        <input value={country} onChange={countryInput} type="text" id="country" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="facebook" className="block text-gray-700 font-medium mb-2">Facebook</label>
                        <input value={facebook} onChange={facebookInput} type="text" id="facebook" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instagram" className="block text-gray-700 font-medium mb-2">Instagram</label>
                        <input value={instagram} onChange={instagramInput} type="text" id="instagram" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">Linkedin</label>
                        <input value={linkedin} onChange={linkedinInput} type="text" id="linkedin" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="github" className="block text-gray-700 font-medium mb-2">Github</label>
                        <input value={github} onChange={githubInput} type="text" id="github" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="profileImage" className="block text-gray-700 font-medium mb-2">Profile Image URL</label>
                        <input value={profileImage} onChange={profileImageInput} type="text" id="profileImage" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="about" className="block text-gray-700 font-medium mb-2">About Me</label>
                        <textarea value={about} onChange={aboutInput} id="about" className="w-full px-3 py-2 form-input" ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;