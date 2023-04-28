import React, {useContext, useEffect, useState} from 'react';
import {database} from "../firebase/firebase.init.js";
import { ref, set } from "firebase/database";
import {AuthContext} from "../provider/AuthProvider.jsx";
import {ProfileDataContext} from "../provider/ProfileInfoProvider.jsx";


const ProfileForm = () => {

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [addressValue, setAddressValue] = useState('');
    const [zipCodeValue, setZipCodeValue] = useState('');
    const [websiteValue, setWebsiteValue] = useState('');
    const [stateValue, setStateValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [facebookValue, setFacebookValue] = useState('');
    const [instagramValue, setInstagramValue] = useState('');
    const [linkedinValue, setLinkedinValue] = useState('');
    const [githubValue, setGithubValue] = useState('');

    const { user } = useContext(AuthContext);
    const { profileData } = useContext(ProfileDataContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const zipCode = form.zipCode.value;
        const website = form.website.value;
        const state = form.state.value;
        const country = form.country.value;
        const facebook = form.facebook.value;
        const instagram = form.instagram.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;

        set(ref(database, 'users/profile/' + user?.uid), {
            firstName,
            lastName,
            username,
            email,
            phone,
            address,
            zipCode,
            website,
            state,
            country,
            facebook,
            instagram,
            linkedin,
            github
        });
    };


    useEffect(() => {
        setFirstNameValue(profileData?.firstName);
        setLastNameValue(profileData?.lastName);
        setUsernameValue(profileData?.username);
        setEmailValue(profileData?.email);
        setPhoneValue(profileData?.phone);
        setAddressValue(profileData?.address);
        setZipCodeValue(profileData?.zipCode);
        setWebsiteValue(profileData?.website);
        setStateValue(profileData?.state);
        setCountryValue(profileData?.country);
        setFacebookValue(profileData?.facebook);
        setInstagramValue(profileData?.instagram);
        setLinkedinValue(profileData?.linkedin);
        setGithubValue(profileData?.github);
    }, [profileData]);

    const firstNameInput = e => {
        console.log(e.target.value);
        setFirstNameValue(e.target.value);
    }
    const lastNameInput = e => {
        console.log(e.target.value);
        setLastNameValue(e.target.value);
    }
    const usernameInput = e => {
        console.log(e.target.value);
        setUsernameValue(e.target.value);
    }
    const emailInput = e => {
        console.log(e.target.value);
        setEmailValue(e.target.value);
    }
    const phoneInput = e => {
        console.log(e.target.value);
        setPhoneValue(e.target.value);
    }
    const addressInput = e => {
        console.log(e.target.value);
        setAddressValue(e.target.value);
    }
    const zipCodeInput = e => {
        console.log(e.target.value);
        setZipCodeValue(e.target.value);
    }
    const websiteInput = e => {
        console.log(e.target.value);
        setWebsiteValue(e.target.value);
    }
    const stateInput = e => {
        console.log(e.target.value);
        setStateValue(e.target.value);
    }
    const countryInput = e => {
        console.log(e.target.value);
        setCountryValue(e.target.value);
    }
    const facebookInput = e => {
        console.log(e.target.value);
        setFacebookValue(e.target.value);
    }
    const instagramInput = e => {
        console.log(e.target.value);
        setInstagramValue(e.target.value);
    }
    const linkedinInput = e => {
        console.log(e.target.value);
        setLinkedinValue(e.target.value);
    }
    const githubInput = e => {
        console.log(e.target.value);
        setGithubValue(e.target.value);
    }

    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1>
            <div className="w-1/2 mx-auto mt-6 bg-gray-200 p-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                        <input value={firstNameValue} onChange={firstNameInput} type="text" id="firstName" name="firstName" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                        <input value={lastNameValue} onChange={lastNameInput} type="text" id="lastName" name="lastName" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input value={usernameValue} onChange={usernameInput} type="text" id="username" name="username" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input value={emailValue} onChange={emailInput} type="email" id="email" name="email" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input value={phoneValue} onChange={phoneInput} type="tel" id="phone" name="phone" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                        <input value={addressValue} onChange={addressInput} type="text" id="address" name="address" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">Zip / Postal Code</label>
                        <input value={zipCodeValue} onChange={zipCodeInput} type="text" id="zipCode" name="zipCode" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                        <input value={websiteValue} onChange={websiteInput} type="url" id="website" name="website" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                        <input value={stateValue} onChange={stateInput} type="text" id="state" name="state" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                        <input value={countryValue} onChange={countryInput} type="text" id="country" name="country" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="facebook" className="block text-gray-700 font-medium mb-2">Facebook</label>
                        <input value={facebookValue} onChange={facebookInput} type="text" id="facebook" name="facebook" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instagram" className="block text-gray-700 font-medium mb-2">Instagram</label>
                        <input value={instagramValue} onChange={instagramInput} type="text" id="instagram" name="instagram" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">Linkedin</label>
                        <input value={linkedinValue} onChange={linkedinInput} type="text" id="linkedin" name="linkedin" className="w-full px-3 py-2 form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="github" className="block text-gray-700 font-medium mb-2">Github</label>
                        <input value={githubValue} onChange={githubInput} type="text" id="github" name="github" className="w-full px-3 py-2 form-input" />
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