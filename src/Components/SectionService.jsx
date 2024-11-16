import React from 'react';
import WebDesignIcon from '../assets/img/webdesignicon.jpg';
import UiUxDesignIcon from '../assets/img/uiuxdesignicon.jpg';
import WebMigrationIcon from '../assets/img/webmigrationicon.jpg';
import Appdevelopmenticon from '../assets/img/appdevelopmenticon.jpg';
import HubSpoticon from '../assets/img/hubspoticon.jpg';
import Emailmarketing from '../assets/img/emailmarketing.jpg';

const SectionService = () => {
  const cardDataOurProcess = [
    {
      icon: WebDesignIcon,
      title: 'Web Design / Development',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout',
    },
    {
      icon: UiUxDesignIcon,
      title: 'UI/UX Design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout',
    },
    {
      icon: WebMigrationIcon,
      title: 'Website Migration',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout',
    },
    {
      icon: Appdevelopmenticon,
      title: 'App Development',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout',
    },
    {
      icon: HubSpoticon,
      title: 'HubSpot Integration',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout',
    },
    {
      icon: Emailmarketing,
      title: 'Email Marketing',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout',
    },
  ];

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
          {cardDataOurProcess.map((card, index) => {
            return (
              <div key={index} className='bg-secondary px-8 py-6 relative flex flex-col justify-center gap-y-3 rounded-lg'>
                {/* Icon section */}
                <div className='flex justify-between'>
                  <div className='bg-white p-3 rounded-lg'>
                    <img src={card.icon} alt='' />
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
                <p className='text-base'>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionService;
