import React from 'react';
import portFolio from '../assets/img/Rectangle.png';
import portFolio_1 from '../assets/img/Rectangle-1.png';
import portFolio_2 from '../assets/img/Rectangle-2.png';
import portFolio_3 from '../assets/img/Rectangle-3.png';
import portFolio_4 from '../assets/img/Rectangle-4.png';

const PortfolioGroup = () => {
  return (
    <div className='flex flex-col container mx-auto p-4 gap-40'>
      <div className='flex flex-wrap justify-center items-center text-gray-400'>
        <div className='py-3 px-6 md:py-6 md:px-12 border border-gray-300 rounded-l-lg text-sm md:text-base bg-accent text-white'>ALL</div>
        <div className='py-3 px-6 md:py-6 md:px-12 border border-gray-300 text-sm md:text-base'>LIFE</div>
        <div className='py-3 px-6 md:py-6 md:px-12 border border-gray-300 text-sm md:text-base'>MOMENTS</div>
        <div className='py-3 px-6 md:py-6 md:px-12 border border-gray-300 text-sm md:text-base'>NATURE</div>
        <div className='py-3 px-6 md:py-6 md:px-12 border border-gray-300 text-sm md:text-base'>STORIES</div>
        <div className='py-3 px-6 md:py-6 md:px-12 border border-gray-300 rounded-r-lg text-sm md:text-base'>TRAVEL</div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6'>
        {/* Card 1: Top Left (Besar) */}
        <div className='col-span-1 md:col-span-2 lg:col-span-8'>
          <img src={portFolio} alt='Portfolio 1' className='rounded-lg w-full h-full shadow-lg' />
        </div>

        {/* Card 2: Top Right */}
        <div className='col-span-1 md:col-span-1 lg:col-span-4'>
          <img src={portFolio_4} alt='Portfolio 2' className='rounded-lg w-full h-auto shadow-lg' />
        </div>

        {/* Card 3: Bottom Left */}
        <div className='col-span-1 md:col-span-1 lg:col-span-3'>
          <img src={portFolio_2} alt='Portfolio 3' className='rounded-lg w-full h-full object-cover shadow-lg' />
        </div>

        {/* Card 4: Bottom Middle */}
        <div className='col-span-1 md:col-span-1 lg:col-span-3'>
          <img src={portFolio_1} alt='Portfolio 4' className='rounded-lg w-full h-full shadow-lg' />
        </div>

        {/* Card 5: Bottom Right */}
        <div className='col-span-1 md:col-span-2 lg:col-span-6'>
          <img src={portFolio_3} alt='Portfolio 5' className='rounded-lg w-full h-full shadow-lg' />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGroup;
