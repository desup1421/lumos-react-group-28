import React from 'react';
import image from '../assets/img/banner.jpg'; // Import the banner image from assets

// Define the SectionBanner component
const SectionBanner = () => {
  return (
    // The main section of the banner with a custom font
    <section className='font-raleway'>
      {/* A container for centering and layout adjustments */}
      <div className='flex flex-col justify-center mb-20 container mx-auto lg:max-w-7xl md:w-11/12 px-4 py-24 md:my-5'>
        {/* The banner wrapper with relative positioning */}
        <div className='relative w-full bg-cover overflow-hidden p-3 rounded-md'>
          {/* The image wrapper */}
          <div>
            {/* Absolute positioned image for the banner background */}
            <img className='absolute bottom-[-210px] left-0 w-full' src={image} alt='banner image' />
          </div>

          {/* Overlay with semi-transparent color */}
          <div className='absolute inset-0 bg-primary/80 rounded-md'></div>

          {/* Content inside the banner */}
          <div className='relative flex flex-col items-center justify-center h-full text-white min-h-36 md:p-28'>
            {/* Quotation text inside the banner */}
            <q className='text-white md:text-4xl text-xl font-semibold mb-2 text-center'>“Some of the History of Our Company is that we are Catching up through Video”</q>

            {/* Button below the quote */}
            <button className='px-4 py-2 bg-accent text-white rounded-md mt-5'>View More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner; // Export the component for use in other parts of the app
    