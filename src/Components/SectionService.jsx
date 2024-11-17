import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const SectionService = ({ limit }) => {
  // Fetch data from the API using the custom hook
  const [services, setServices] = useState([]);

  const { dataApi } = useFetch(`expertise?limit=${limit}`);

  useEffect(() => {
    if (dataApi) {
      setServices(dataApi);
    }
  }, [dataApi]);

  console.log(services);

  return (
    <section>
      <div className='flex flex-col justify-center mb-20 container mx-auto lg:w-10/12 md:w-11/12 px-4 py-24 md:my-5'>
        <div className='flex flex-col w-full text-center justify-center items-center mb-14'>
          <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-center font-bold`}>\ Service \</h1>
          {/* Main title */}
          <p className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>Our Expertice</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-2'>
          {/* Loop through card data to generate individual cards */}
          {services && services.length > 0 ? (
            services.map((card, index) => {
              return (
                <div key={index} className='bg-secondary px-8 py-6 relative flex flex-col justify-center gap-y-3 rounded-lg'>
                  {/* Icon section */}
                  <div className='flex justify-between'>
                    <div className='bg-white p-3 rounded-lg'>
                      <img src={card.imageUrl} alt='' />
                    </div>
                  </div>

                  {/* Card number displayed as a large number */}

                  {/* Card title */}
                  <h3 className='font-bold font-raleway text-xl text-primary'>{card.title}</h3>

                  {/* Decorative lines */}
                  <div className='flex gap-1 mb-4'>
                    <div className='bg-accent h-1 w-14 rounded-lg'></div>
                    <div className='bg-accent h-1 w-4 rounded-lg'></div>
                  </div>

                  {/* Card description */}
                  <p className='text-base'>{card.desc}</p>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionService;
