import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="flex items-center justify-center h-full">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops! Something went wrong.</h1>
                    <p className="text-gray-600">We apologize for the inconvenience. Please try again later.</p>
                    <Link to={'/'}>
                        <button className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Go to home</button>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default ErrorPage;
