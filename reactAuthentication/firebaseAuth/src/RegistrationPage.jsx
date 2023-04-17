import React from "react";
import GoogleAuth from "./auth/googleAuth.jsx";
import GitHubAuth from "./auth/GitHubAuth.jsx";
import Register from "./auth/Register.jsx";

const RegistrationPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <Register />

                <div className="flex justify-center items-center mt-4">
                    <span className="text-gray-500">Or sign up with</span>
                    <div className="flex ml-2">
                        <GoogleAuth/>
                        <GitHubAuth />
                        <a
                            href="/auth/twitter"
                            className="mx-2 text-blue-500 hover:text-blue-600"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
