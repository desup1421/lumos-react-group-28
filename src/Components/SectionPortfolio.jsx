import React, { useState } from 'react';
import portFolio from '../assets/img/Rectangle.png';
import portFolio_1 from '../assets/img/Rectangle-1.png';
import portFolio_2 from '../assets/img/Rectangle-2.png';
import portFolio_3 from '../assets/img/Rectangle-3.png';
import portFolio_4 from '../assets/img/Rectangle-4.png';

const SectionPortFolio = () => {
  // State to track the active button
  const [activeTab, setActiveTab] = useState('ALL');

  // Array of navigation items
  const navItems = ['ALL', 'LIFE', 'MOMENTS', 'NATURE', 'STORIES', 'TRAVEL'];

  return (
    <section className='container mx-auto lg:w-10/12 md:w-11/12 px-4 py-44 md:my-5 font-raleway '>
      <div className='flex justify-center mb-10'>
        <div className='flex flex-col w-full text-center justify-center items-center'>
          <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-center font-bold`}>\ Portfolio \</h1>
          {/* Main title */}
          <p className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>Our Work</p>
        </div>
      </div>

      <div className='flex flex-col container mx-auto p-4 gap-20'>
        <div className='flex flex-col container mx-auto p-4 gap-20'>
          {/* Outer container for the overall layout with vertical spacing */}
          <div className='flex flex-col container mx-auto p-4 gap-10'>
            {/* Inner container for the navigation buttons */}
            <div className='flex flex-col container mx-auto p-4'>
              {/* Flex container to arrange navigation buttons in a single row */}
              <div className='flex flex-wrap justify-center items-center'>
                {navItems.map((item, index) => (
                  <button
                    key={index} // Assign a unique key for each button
                    className={`py-2 px-4 md:py-3 md:px-6 border border-gray-400 text-xs md:text-sm 
              ${item === activeTab ? 'bg-accent text-white' : 'bg-white text-gray-400'}
              ${index === 0 ? 'rounded-l-lg' : ''} // Add rounded corners to the first button
              ${index === navItems.length - 1 ? 'rounded-r-lg' : ''} // Add rounded corners to the last button
              hover:bg-accent hover:text-white transition-colors duration-300`} // Styling for hover and transitions
                    onClick={() => setActiveTab(item)} // Set the active tab when a button is clicked
                  >
                    {item} {/* Display the navigation item text */}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6'>
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
      <div className='flex justify-center mt-10'>
        <button className='px-4 py-2 bg-accent text-white rounded-md mt-5'>View More</button>
      </div>
    </section>
  );
};

export default SectionPortFolio;
