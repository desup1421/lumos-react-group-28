import React, { useEffect, useState } from 'react';
import CallIcon from '../assets/img/InfoCallIcon.png';
import { useFetch } from '../hooks/useFetch';

const SectionAbout = () => {
  const { dataApi } = useFetch(`about-us`);
  const [aboutUs, setAboutUs] = useState(null);

  // Data for About Us
  useEffect(() => {
    setAboutUs(dataApi);
  }, [dataApi]);

  return (
    <section className='bg-secondary'>
      {/* Main container with padding and responsive width */}
      <div className='container mx-auto lg:w-10/12 md:w-11/12 px-4 py-24 md:my-5'>
        {/* Grid layout with 1 column on small screens, 2 columns on larger screens */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-10 md:gap-y-10 gap-x-10'>
          {/* Image section */}
          <div className='flex justify-end items-center'>
            <img className='w-full md:w-full lg:w-auto' src={aboutUs && aboutUs.imageUrl} alt='' />
            {/* Responsive image size */}
          </div>

          {/* Text and Info section */}
          <div>
            <div className='flex flex-col w-ful'>
              {/* About Us heading */}
              <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-left font-bold`}>\ About Us \</h1>

              {/* Main title with responsive text size */}
              <p className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>{aboutUs && aboutUs.title}</p>
            </div>

            {/* Description text */}
            <p className='text-base lg:pr-32 mb-8 py-5'>{aboutUs && aboutUs.desc}</p>

            {/* Info Card Section */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {/* Info card with 2-column span */}
              <div className='flex border col-span-2 gap-x-4 p-4 bg-white rounded-lg'>
                {/* Icon container */}
                <div className='border p-2 rounded-lg bg-secondary items-center'>
                  <img src={CallIcon} alt='' />
                </div>

                {/* Text for professional advice */}
                <div>
                  <h3 className='text-primary text-lg font-semibold'>Get Instant Professional Advice</h3>
                  <p className='text-sm font-normal'>
                    Ready to Help : <span className='text-accent font-medium'>+1 356 678 7897</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
