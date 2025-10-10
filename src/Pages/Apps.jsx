import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import { Search } from 'lucide-react';
import AppNotFound from '../components/AppNotFound';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');

  const term = search.trim().toLocaleLowerCase();

  const searchApps = term
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="bg-[#f5f5f5]">
      <div className="pt-14 pb-8">
        <h1 className="text-[#001931] text-3xl md:text-4xl text-center font-bold leading-13">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-center px-5 w-full md:w-3xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="container mx-auto py-5 px-5 flex flex-col md:flex-row md:gap-0 gap-5 justify-between items-center">
        <p className="text-[#001931] font-semibold">
          ({searchApps.length}) Apps Found
        </p>
        <label className="input">
          {' '}
          <Search size={15} color="gray" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>

      {/* {loading ? (
        <LoadingSpinner count={20} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
          {searchApps.map(app => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )} */}

      {loading ? (
        <LoadingSpinner count={20} />
      ) : searchApps.length === 0 ? (
        <div className="py-10">
          <h3 className="text-5xl text-center text-gray-400">No Apps Found</h3>
          <div className="flex justify-center py-5">
            <Link
              to="/"
              className="btn px-20 bg-gradient-to-t from-[#9e62f2] to-[#622ee3] text-white rounded-lg"
            >
              Go back!
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto pb-10">
          {searchApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
