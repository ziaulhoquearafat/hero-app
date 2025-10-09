import React from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';

const Apps = () => {
  const { apps } = useApps();
  console.log(apps);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto p-5">
        {apps.map(app => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
