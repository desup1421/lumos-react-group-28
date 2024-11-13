import React from 'react';
import testimonialImg from '../assets/img/Ellipse 4.jpg'; // Mengimpor gambar yang akan digunakan dalam komponen.
import 'boxicons'; // Mengimpor ikon dari 'boxicons' untuk digunakan dalam komponen.

// Definisi komponen TestimonialCard
const TestimonialCard = ({ des, image, name, job }) => {
  return (
    // Container utama dengan lebar 750px, background color 'secondary', padding 30px, dan sudut rounded-xl.
    <div className='w-[750px] bg-secondary p-[30px] rounded-xl'>
      <div className='flex items-center justify-between'>
        <img src={image} alt='' />
        <i className='bx bxs-quote-left text-[60px] text-center text-accent scale-x-[-1]'></i>
      </div>
      <p className='pt-[40px] pb-[30px]'>{des}</p>
      <h3 className='text-accent font-semibold'>{name}</h3>
      <p className='font-semibold text-primary'>{job}</p>
    </div>
  );
};

export default TestimonialCard;
