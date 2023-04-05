import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import welcomeImg from '../assets/welcome.jpg';
import OAuth from '../components/OAuth.jsx';

const forgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto lg:gap-x-[50px]">
        <div className="md:w-[67%] lg:w-[50%] mb-12 mb:mb-6 overflow-hidden rounded-2xl">
          <img src={`${welcomeImg}`} alt="welcome" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form className="flex flex-col gap-6">
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />

            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-red-500 hover:text-red-700">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/sign-in" className="text-blue-500 hover:text-blue-700">
                  Sign In
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-sm font-medium uppercase px-7 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg"
            >
              Reset Password
            </button>
          </form>
          <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </section>
  );
};

export default forgotPassword;
