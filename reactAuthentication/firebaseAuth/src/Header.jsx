import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "./provider/AuthProvider.jsx";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful');
            }).catch((error) => {
                const code = error.code;
                console.log(code);
            });
    }
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
                    <li>
                        <a href="/manage/user" className="hover:text-gray-300">All users</a>
                    </li>
                    <li>
                        <a href="/update/profile" className="hover:text-gray-300">Profile</a>
                    </li>
                </ul>
            </nav>
            {
                user ?
                    <>
                        <div className="flex space-x-4">
                            <Link to={'/profile'}>
                                <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-gray-100">Profile</button>
                            </Link>
                            <button onClick={handelLogOut} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign out</button>
                        </div>
                    </>
                    :
                    <div className="flex space-x-4">
                        <Link to={'/login'}>
                            <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-gray-100">Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
                        </Link>
                    </div>
            }

        </header>
    );
};

export default Header;
