import React from 'react';
import HeroSectionImage from '../assets/img/HeroSectionImage.jpg';

const SectionHome = () => {
  return (
    <>
      <section className='container mx-auto lg:w-10/12 md:w-11/12 px-2 py-10 md:my-5 '>
        {/* Section wrapper with responsive width and padding */}

        <div className='grid grid-cols-1  md:grid-cols-2 gap-4 gap-y-20 md:gap-y-2 '>
          {/* Grid layout with 1 column on small screens, 2 columns on medium screens */}
          <div className='flex flex-col justify-center lg:items-center px-2  order-last md:order-none'>
            {/* Center content flexbox with responsive alignment */}

            <div className='flex flex-col justify-center w-ful'>
              {/* Centered content */}
              <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-left font-bold`}>\ We Are Here \</h1>
              {/* Heading with responsive text size */}
              <p className={`text-primary lg:text-[3rem] md:text-[2rem] text-[2rem] py-1 font-bold text-left`}>
                Better Insights For <br /> Business Growth
              </p>
              {/* Main message with responsive text size */}
            </div>
          </div>
          <div className='flex justify-center items-center'>
            {/* Image container */}
            <img src={HeroSectionImage} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHome;
