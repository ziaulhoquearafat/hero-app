import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import errorImg from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mx-auto py-10">
        <img src={errorImg} alt="" />
        <h2 className="text-[#001931] text-3xl md:text-5xl text-center font-bold md:leading-20">
          Oops, page not found!
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

export default ErrorPage;
