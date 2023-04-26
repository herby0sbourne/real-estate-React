import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { pathname } = useLocation();

  const activeRoute = (route) => {
    if (route === pathname) return true;
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center max-w-6xl px-3 mx-auto h-[50px]">
        <div className="w-[160px]">
          <Link to="/">
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-10 ">
            <li>
              <Link
                className={`${
                  activeRoute('/') ? 'active' : ''
                } py-3 font-semibold text-gray-400 border-b-transparent`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  activeRoute('/offers') ? 'active' : ''
                } py-3 font-semibold text-gray-400 border-b-transparent`}
                to="/offers"
              >
                Offers
              </Link>
            </li>
            <li>
              {currentUser ? (
                <Link
                  className={`${
                    activeRoute('/profile') ? 'active' : ''
                  } py-3 font-semibold text-gray-400 border-b-transparent`}
                  to="/profile"
                >
                  profile
                </Link>
              ) : (
                <Link
                  className={`${
                    activeRoute('/sign-in') ? 'active' : ''
                  } py-3 font-semibold text-gray-400 border-b-transparent`}
                  to="/sign-in"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
