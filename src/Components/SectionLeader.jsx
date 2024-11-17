import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const SectionLeader = () => {
  const { dataApi } = useFetch('team');
  const [teams, setTeams] = useState(null);

  console.log(dataApi);

  // Data for About Us
  useEffect(() => {
    setTeams(dataApi);
  }, [dataApi]);
  return (
    <section className='bg-secondary py-40'>
      <div className='max-w-7xl mx-auto px-4 '>
        {/* Wrapper section with a maximum width and padding */}
        <div className='flex flex-col w-full text-center justify-center items-center mb-14'>
          {/* Section title and subtitle container */}
          <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-center font-bold`}>\ Team \</h1>
          {/* Main title */}
          <p className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>Our Leaders</p>
        </div>

        {/* Grid for displaying leader cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teams && teams.length > 0 ? (
            teams.map((team, index) => (
              // Individual leader card
              <div key={index} className='flex flex-col items-center'>
                <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
                  {/* Leader's image */}
                  <img src={team.imageUrl} alt={team.name} className='w-full h-full object-cover' />
                </div>
                {/* Leader's name */}
                <h3 className='text-red-500 text-lg font-medium'>{team.name}</h3>
                {/* Leader's role */}
                <p className='text-gray-600'>{team.role}</p>
              </div>
            ))
          ) : (
            <div
            ></div>
          )}
        </div>
        {/* End of leaders grid */}
      </div>
    </section>
  );
};

export default SectionLeader;
