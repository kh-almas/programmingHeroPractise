import React, {useEffect, useState} from 'react';
import auth from "../../firebase/firebase.init.js";
import {getAuth} from "firebase/auth";

const ManageUsers = () => {
    // const [allUser, setAllUser] = useState();
    // useEffect(() => {
    //     getAuth(app)
    //         .then((listUsersResult) => {
    //             listUsersResult.users.forEach((userRecord) => {
    //                 console.log('user', userRecord.toJSON());
    //             });
    //             // if (listUsersResult.pageToken) {
    //             //     // List next batch of users.
    //             //     listAllUsers(listUsersResult.pageToken);
    //             // }
    //         })
    //         .catch((error) => {
    //             console.log('Error listing users:', error);
    //         });
    // }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4 text-center">All Users Information</h1>
            <table className="table-auto w-full text-center border overflow">
                <thead>
                    <tr>
                        <th className="px-4 py-2 font-medium text-gray-700 uppercase tracking-wider">uid</th>
                        <th className="px-4 py-2 font-medium text-gray-700 uppercase tracking-wider">display Name</th>
                        <th className="px-4 py-2 font-medium text-gray-700 uppercase tracking-wider">phone Number</th>
                        <th className="px-4 py-2 font-medium text-gray-700 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-2 font-medium text-gray-700 uppercase tracking-wider">email Verified</th>
                        <th className="px-4 py-2 font-medium text-gray-700 uppercase tracking-wider">last Login At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">John Doe</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">25</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">johndoe@example.com</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">John Doe</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">25</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">johndoe@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;