import React from 'react';
import desginPlaningIcon from '../assets/img/desginPlaingIcon.jpg';
import developPlaningIIcon from '../assets/img/developPlaningIcon.jpg';
import testPlaningIcon from '../assets/img/tesPlaningIcon.jpg';
import researchPlaningIcon from '../assets/img/researchPlaningIcon.jpg';

const SectionPlaning = () => {
  // Array that holds data for each process card
  const cardDataOurProcess = [
    {
      icon: researchPlaningIcon,
      title: 'Research',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
      number: '1',
    },
    {
      icon: desginPlaningIcon,
      title: 'Design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.',
      number: '2',
    },
    {
      icon: developPlaningIIcon,
      title: 'Develope',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.',
      number: '3',
    },
    {
      icon: testPlaningIcon,
      title: 'Test',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.',
      number: '4',
    },
  ];

  return (
    <div className='container mx-auto lg:w-10/12 md:w-11/12 px-4 py-24 md:my-5'>
      {/* Header Section */}
      <div className='flex justify-center mb-20'>
        <div className='flex flex-col w-full text-center justify-center items-center'>
          <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-center font-bold`}>\ Planing \</h1>
          {/* Main title */}
          <p className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>Our Process</p>
        </div>
      </div>

      {/* Grid Section */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-2'>
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
              <div className='absolute right-5 top-4 text-5xl font-bold font-raleway text-gray-300'>0{card.number}</div>

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
  );
};

export default SectionPlaning;
