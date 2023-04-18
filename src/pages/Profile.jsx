import React, { useContext, useState } from 'react';
import { signUserOut } from '../utils/firebase';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">Welcome</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={currentUser.displayName}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <input
              type="email"
              name="email"
              value={currentUser.email}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Do you want to Edit?{' '}
                <button
                  className="btn-base text-red-600 hover:text-red-700 transition ease-in-out duration-200"
                  type="button"
                >
                  Edit
                </button>
              </p>
              <button
                className="btn-base text-blue-600 hover:text-blue-700 transition ease-in-out duration-200"
                type="button"
                onClick={signUserOut}
              >
                Sign out
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
