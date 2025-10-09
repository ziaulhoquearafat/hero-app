import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import { Search } from 'lucide-react';

const Apps = () => {
  const { apps } = useApps();
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

      <div className="container mx-auto px-5 flex justify-between items-center">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto p-5">
        {searchApps.map(app => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
