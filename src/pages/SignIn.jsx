import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

import { notify } from '../utils/notification.js';
import { signInUserWithEmailAndPassword } from '../utils/firebase.js';

import welcomeImg from '../assets/welcome.jpg';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    const id = notify('loading', 'logging...');
    e.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      // console.log(user);
      notify('success', 'successfully', id);
      pushOnClick();
    } catch (error) {
      notify('error', 'error logging', id);
      console.log(error);
    }
  };

  const pushOnClick = () => {
    navigate(from, { replace: true });
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto lg:gap-x-[50px]">
        <div className="md:w-[67%] lg:w-[50%] mb-12 mb:mb-6 overflow-hidden rounded-2xl">
          <img src={`${welcomeImg}`} alt="welcome" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded"
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={handleChange}
            />

            {/* <div className="w-full text-gray-700 bg-white border-gray-300 rounded overflow-hidden">
              <input
                className="w-full px-4 text-xl py-2 bg-transparent border-transparent rounded"
                type="text"
                name="text"
                id=""
                placeholder="test"
              />
            </div> */}

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
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-red-500 hover:text-red-700">
                  Register
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
              Sign in
            </button>
          </form>
          <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth pushOnClick={pushOnClick} />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
