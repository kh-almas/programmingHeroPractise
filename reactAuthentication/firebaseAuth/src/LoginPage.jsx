import React from 'react';
import GoogleSignIn from "./auth/googleSignIn.jsx";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form>
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
                        Sign In
                    </button>
                </form>
                <div className="flex justify-center items-center mt-4">
                    <span className="text-gray-500">Or sign in with</span>
                    <div className="flex ml-2">
                        <GoogleSignIn/>
                        <a
                            href="/auth/facebook"
                            className="mx-2 text-blue-500 hover:text-blue-600"
                        >
                            Facebook
                        </a>
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
