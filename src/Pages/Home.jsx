import React from 'react';
import playStoreImg from '../assets/playStore.png';
import appleStoreImg from '../assets/AppleStore.png';
import heroImg from '../assets/hero.png';
import useApps from '../hooks/useApps';
import { TrendingUp } from 'lucide-react';
import AppCard from '../components/AppCard';
import { Link } from 'react-router';

const Home = () => {
  const { apps } = useApps();

  const trendingApps = apps.slice(0, 8);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="pt-16 space-y-4">
        <h1 className="text-[#001931] text-5xl md:text-7xl text-center font-bold md:leading-20">
          We Build <br />
          <span className="text-[#632EE3] font-extrabold">Productive</span> Apps
        </h1>
        <p className="text-[#627382] text-center w-full md:w-3xl mx-auto">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center justify-center gap-10 mt-5">
          <a href="https://play.google.com/store/games" target="_blank">
            <button className="btn flex items-center text-[#001931] text-xl py-6 px-7">
              <img src={playStoreImg} alt="Apple App Store" />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <button className="btn flex items-center text-[#001931] text-xl py-6 px-7">
              <img src={appleStoreImg} alt="Apple App Store" />
              App Store
            </button>
          </a>
        </div>
        <div className="flex justify-center mt-10">
          <img src={heroImg} alt="" />
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#9e62f2] to-[#622ee3] text-white text-center pt-16 pb-5">
        <h2 className="font-bold text-3xl md:text-5xl px-5">
          Trusted by Millions, Built For You
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 lg:gap-26 py-8">
          <div className="space-y-5">
            <p className="text-base leading-6 font-extralight">
              Total Downloads
            </p>
            <p className="font-extrabold text-6xl">29.6M</p>
            <p className="text-base leading-6 font-extralight">
              21% More Than Last Month
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-6 font-extralight">Total Reviews</p>
            <p className="font-extrabold text-6xl">906K</p>
            <p className="text-base leading-6 font-extralight">
              46% more than last month
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-6 font-extralight">Active Apps</p>
            <p className="font-extrabold text-6xl">132+</p>
            <p className="text-base leading-6 font-extralight">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-10 space-y-3">
        <h2 className="text-3xl md:text-5xl text-[#001931] font-bold flex justify-center gap-2 items-center">
          Trending Apps <TrendingUp size={60} color="#622ee3" />
        </h2>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto p-5">
        {trendingApps.map(app => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <Link
          to="/apps"
          className="btn bg-gradient-to-t from-[#9e62f2] to-[#622ee3] text-white rounded-lg"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
