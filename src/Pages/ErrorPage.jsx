import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <h1 className="flex-1 text-5xl font-bold flex justify-center items-center">
        404 Page Not Found
      </h1>
      <Footer />
    </div>
  );
};

export default ErrorPage;
