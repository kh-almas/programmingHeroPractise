import React, {useContext} from 'react';
import {database} from "../firebase/firebase.init.js";
import { ref, set } from "firebase/database";
import {AuthContext} from "../provider/AuthProvider.jsx";
import {ProfileDataContext} from "../provider/ProfileInfoProvider.jsx";


const ProfileForm = () => {

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

    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1>
            <div className="w-1/2 mx-auto mt-6 bg-gray-200 p-8">
                <form onSubmit={handleSubmit} className="">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 form-input" value={profileData?.firstName || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 form-input" value={profileData?.lastName || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input type="text" id="username" name="username" className="w-full px-3 py-2 form-input" value={profileData?.username || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 form-input" value={profileData?.email || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 form-input" value={profileData?.phone || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                        <input type="text" id="address" name="address" className="w-full px-3 py-2 form-input" value={profileData?.address || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">Zip / Postal Code</label>
                        <input type="text" id="zipCode" name="zipCode" className="w-full px-3 py-2 form-input" value={profileData?.zipCode || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                        <input type="url" id="website" name="website" className="w-full px-3 py-2 form-input" value={profileData?.website || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                        <input type="text" id="state" name="state" className="w-full px-3 py-2 form-input" value={profileData?.state || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                        <input type="text" id="country" name="country" className="w-full px-3 py-2 form-input" value={profileData?.country || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="facebook" className="block text-gray-700 font-medium mb-2">Facebook</label>
                        <input type="text" id="facebook" name="facebook" className="w-full px-3 py-2 form-input" value={profileData?.facebook || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="instagram" className="block text-gray-700 font-medium mb-2">Instagram</label>
                        <input type="text" id="instagram" name="instagram" className="w-full px-3 py-2 form-input" value={profileData?.instagram || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">Linkedin</label>
                        <input type="text" id="linkedin" name="linkedin" className="w-full px-3 py-2 form-input" value={profileData?.linkedin || ''} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="github" className="block text-gray-700 font-medium mb-2">Github</label>
                        <input type="text" id="github" name="github" className="w-full px-3 py-2 form-input" value={profileData?.github || ''} />
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