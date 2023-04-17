import React from 'react';
import GoogleAuth from "./auth/googleAuth.jsx";
import GitHubAuth from "./auth/GitHubAuth.jsx";
import Login from "./auth/Login.jsx";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <Login />
                <div className="flex justify-center items-center mt-4">
                    <span className="text-gray-500">Or sign in with</span>
                    <div className="flex ml-2">
                        <GoogleAuth />
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

export default LoginPage;
