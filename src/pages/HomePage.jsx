import React from 'react';
import { useSelector } from 'react-redux'; // assuming you're using Redux to manage state

const HomePage = () => {
  // Retrieve the user from state (adjust based on how the user is stored in your state management)
  const user = useSelector((state) => state.user.user);

  return (
    <div className="w-full h-full bg-sky-800 flex items-center rounded-xl justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome, {user.firstname}</h1>
        <div className="mb-4">
          <span className="font-semibold">Email: </span>
          <span>{user.email}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Designation: </span>
          <span>{user.designation}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Contact: </span>
          <span>{user.contact}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">User Type: </span>
          <span>{user.userType}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Admin Status: </span>
          <span>{user.isAdmin ? 'Yes' : 'No'}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Active Status: </span>
          <span>{user.isActive ? 'Active' : 'Inactive'}</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
