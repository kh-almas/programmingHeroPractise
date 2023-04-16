import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="font-bold text-xl">Header</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="/services" className="hover:text-gray-300">Services</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="flex space-x-4">
                <Link to={'/login'}>
                    <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-gray-100">Login</button>
                </Link>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
            </div>
        </header>
    );
};

export default Header;
