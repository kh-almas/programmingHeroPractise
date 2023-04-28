import React, { useContext } from "react";
import "tailwindcss/tailwind.css";
import {ProfileDataContext} from "../provider/ProfileInfoProvider.jsx";
import {Link} from "react-router-dom";
import {AuthContext} from "../provider/AuthProvider.jsx";

function ProfileInfoView() {
    const { profileData } = useContext(ProfileDataContext);
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-2/3 mx-auto mt-3">
            <div className="grid place-items-center mb-5">
                <div>
                    <img
                        className="w-40 h-25 rounded-full mr-5"
                        src={profileData?.profileImage}
                        alt="Profile"
                    />
                    <div className="text-center">
                        <h1 className="font-bold text-xl">{profileData?.firstName} {profileData?.lastName}</h1>
                        <p className="text-gray-600">{user?.displayName}</p>
                    </div>
                    <div className="mt-2 grid place-items-center">
                        <Link to={'/update/profile'} className="mx-auto border rounded px-3 py-1">Edit your profile</Link>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                {
                    profileData?.about ?
                        <>
                            <h2 className="font-bold mb-3">About Me</h2>
                            <p className="text-gray-600">
                                {profileData?.about}
                            </p>
                        </>
                        : ''
                }

            </div>
            {
                profileData?.alternativeEmail ||
                profileData?.phone ||
                profileData?.address ||
                profileData?.state ||
                profileData?.zipCode ||
                profileData?.country ||
                profileData?.website ||
                profileData?.facebook ||
                profileData?.instagram ||
                profileData?.linkedin ||
                profileData?.github ?
                    <div>
                        <h2 className="font-bold mb-3">Contact Information</h2>
                        <ul className="list-disc ml-5">
                            {
                                profileData?.alternativeEmail
                                    ? <li className="text-gray-600">Alternative Email: {profileData?.alternativeEmail}</li>
                                    : ''
                            }
                            {
                                profileData?.phone
                                    ? <li className="text-gray-600">Phone: {profileData?.phone}</li>
                                    : ''
                            }
                            {
                                profileData?.address || profileData?.state || profileData?.zipCode || profileData?.country
                                    ? <li className="text-gray-600">Address: {profileData?.address} {profileData?.state} {profileData?.zipCode}, {profileData?.country}</li>
                                    : ''
                            }
                            {
                                profileData?.website
                                    ? <li className="text-gray-600">Website: {profileData?.website}</li> :
                                    ''
                            }
                            {
                                profileData?.facebook
                                    ? <li className="text-gray-600">Facebook: {profileData?.facebook}</li>
                                    : ''
                            }
                            {
                                profileData?.instagram
                                    ? <li className="text-gray-600">Instagram: {profileData?.instagram}</li>
                                    : ''
                            }
                            {
                                profileData?.linkedin
                                    ? <li className="text-gray-600">LinkedIn: {profileData?.linkedin}</li>
                                    : ''
                            }
                            {
                                profileData?.github
                                    ? <li className="text-gray-600">GitHub: {profileData?.github}</li>
                                    : ''
                            }
                        </ul>
                    </div> : ''
            }

        </div>
    );
}

export default ProfileInfoView;
