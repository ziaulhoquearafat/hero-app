import React from 'react';
import AppErrorImg from '../assets/App-Error.png';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const AppNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto py-10">
        <img className="mx-auto" src={AppErrorImg} alt="" />
        <h2 className="text-[#001931] text-3xl md:text-5xl text-center font-bold md:leading-20">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-[#627382] text-center">
          The page you looking for is not available
        </p>
        <div className="flex justify-center py-5">
          <Link
            to="/"
            className="btn px-20 bg-gradient-to-t from-[#9e62f2] to-[#622ee3] text-white rounded-lg"
          >
            Go back!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppNotFound;
