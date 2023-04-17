import React from "react";
import GoogleAuth from "./auth/googleAuth.jsx";
import GitHubAuth from "./auth/GitHubAuth.jsx";

const RegistrationPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form>
                    <input
                        type="name"
                        placeholder="Name"
                        className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex justify-center items-center mt-4">
                    <span className="text-gray-500">Or sign in with</span>
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
