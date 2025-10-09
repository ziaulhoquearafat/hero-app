import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png';
import { Github } from 'lucide-react';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className={'mr-3 text-base font-semibold'} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={'mr-3 text-base font-semibold'} to="/apps">
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink className={'mr-3 text-base font-semibold'} to="/installation">
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-[50px] mr-3" src={logoImg} alt="" />
          <Link to="/" className="text-xl font-bold text-[#622ee3]">
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/ziaulhoquearafat"
          target="_blank"
          className="btn bg-gradient-to-t from-[#9e62f2] to-[#622ee3] text-white rounded-lg"
        >
          <Github /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
