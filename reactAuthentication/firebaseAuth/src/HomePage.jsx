import React, {useContext} from 'react';
import {AuthContext} from "./provider/AuthProvider.jsx";

const HomePage = () => {
    const user = useContext(AuthContext);
    console.log(user);
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome {user && user.displayName } to My Website</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper malesuada orci eu convallis.</p>
                </section>
                <section className="mt-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Services</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <li className="flex justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Web Design</h3>
                                <p className="text-gray-600">I specialize in creating modern and user-friendly web designs that engage users and deliver a great experience.</p>
                            </div>
                        </li>
                        <li className="flex justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Frontend Development</h3>
                                <p className="text-gray-600">I have extensive experience in building responsive and interactive user interfaces using popular frontend technologies such as React, Angular, and Vue.</p>
                            </div>
                        </li>
                        <li className="flex justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">UI/UX Design</h3>
                                <p className="text-gray-600">I have a strong eye for detail and can create visually appealing and intuitive user interfaces that enhance the overall user experience.</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="mt-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
                    <p className="text-gray-600">If you have any questions or would like to discuss a potential project, feel free to contact me using the form below or through the contact information provided.</p>
                    {/* Include contact form or contact information here */}
                </section>
            </main>
        </div>
    );
};

export default HomePage;
