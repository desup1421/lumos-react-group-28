import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const SectionPortFolio = () => {
  const { dataApi } = useFetch(`portfolio`);
  const [portfolio, setPortfolios] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [activeTab, setActiveTab] = useState('ALL');
  // Data for blog cards
  useEffect(() => {
    setPortfolios(dataApi);
    setFilteredPortfolio(dataApi);
  }, [dataApi]);

  // State to track the active button

  // Array of navigation items
  const navItems = ['ALL', 'LIFE', 'MOMENTS', 'NATURE', 'STORIES', 'TRAVEL'];

  const filterByCategory = (category) => {
    setActiveTab(category); // Update kategori aktif
    if (category === 'All') {
      setFilteredPortfolio(portfolio); // Tampilkan semua data
    } else {
      setFilteredPortfolio(portfolio.filter((item) => item.content === category));
    }
  };

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
                    key={index}
                    className={`py-2 px-4 md:py-3 md:px-6 border border-gray-400 text-xs md:text-sm 
                       ${item === activeTab ? 'bg-accent text-white' : 'bg-white text-gray-400'}
                       hover:bg-accent hover:text-white transition-colors duration-300`}
                    onClick={() => filterByCategory(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {/* Card 1: Top Left (Besar) */}
          {filteredPortfolio && filteredPortfolio.length > 0 ? (
            filteredPortfolio.map((item, index) => (
              <div key={index} className='col-span-1 md:col-span-1 lg:col-span-1'>
                <img src={item.image} alt={`Portfolio ${item.title}`} className='rounded-lg w-full h-full shadow-lg' />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <button className='px-4 py-2 bg-accent text-white rounded-md mt-5'>View More</button>
      </div>
    </section>
  );
};

export default SectionPortFolio;
