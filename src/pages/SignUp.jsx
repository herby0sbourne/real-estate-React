import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {addUserToDatabase, signUpUserWithEmailAndPassword} from '../utils/firebase';
import OAuth from '../components/OAuth';

import welcomeImg from '../assets/welcome.jpg';
import {notify} from '../utils/notification';

const SignUp = () => {
  const [formData, setFormData] = useState({name: '', email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const {name, email, password} = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevValue) => ({...prevValue, [name]: value}));
  };

  const handleSubmit = async (e) => {
    const id = notify('loading', 'signing up...');
    try {
      e.preventDefault();
      const {user} = await signUpUserWithEmailAndPassword(name, email, password);
      await addUserToDatabase(user, {name});
      notify('success', 'successfully signed up', id);
      navigate('/');
    } catch (error) {
      notify('error', 'error creating user');
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
    }
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto lg:gap-x-[50px]">
        <div className="md:w-[67%] lg:w-[50%] mb-12 mb:mb-6 overflow-hidden rounded-2xl">
          <img src={`${welcomeImg}`} alt="welcome"/>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded"
              type="text"
              name="name"
              value={name}
              placeholder="Full Name"
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded"
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={handleChange}
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded"
                type={`${showPassword ? 'text' : 'password'}`}
                name="password"
                value={password}
                placeholder="password"
                onChange={handleChange}
              />
              <div
                className="absolute right-3 top-3 text-xl cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
              </div>
            </div>
            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Have an account?{' '}
                <Link to="/sign-in" className="text-red-500 hover:text-red-700">
                  Sign In
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-sm font-medium uppercase px-7 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg"
            >
              Sign up
            </button>
          </form>
          <div
            className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth/>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
