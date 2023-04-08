import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
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
              <NavLink
                activeClassName="active"
                className="py-3 font-semibold text-gray-400 border-b-transparent "
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="py-3 font-semibold text-gray-400 border-b-transparent "
                to="/sign-in"
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="py-3 font-semibold text-gray-400 border-b-transparent"
                to="/profile"
              >
                profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
