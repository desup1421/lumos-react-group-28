import React from 'react';
import Leader_1 from '../assets/img/Rectangle14.jpg';
import Leader_2 from '../assets/img/Rectangle15.jpg';

const SectionLeader = () => {
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
          {[
            // Array of leader details
            { name: 'Larry F. Burnett', role: 'CEO', image: Leader_1 },
            { name: 'Meghan J. Webb', role: 'CTO', image: Leader_2 },
            { name: 'Yvonne J. Cullum', role: 'CFO', image: Leader_1 },
            { name: 'Diana H. Williams', role: 'COO', image: Leader_2 },
          ].map((leader, index) => (
            // Individual leader card
            <div key={index} className='flex flex-col items-center'>
              <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
                {/* Leader's image */}
                <img src={leader.image} alt={leader.name} className='w-full h-full object-cover' />
              </div>
              {/* Leader's name */}
              <h3 className='text-red-500 text-lg font-medium'>{leader.name}</h3>
              {/* Leader's role */}
              <p className='text-gray-600'>{leader.role}</p>
            </div>
          ))}
        </div>
        {/* End of leaders grid */}
      </div>
    </section>
  );
};

export default SectionLeader;
