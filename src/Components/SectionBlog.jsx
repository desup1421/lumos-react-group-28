import React from 'react';
import MainBlogImage1 from '../assets/img/MainBlogImage1.jpg';
import MainBlogImage2 from '../assets/img/MainBlogImage2.jpg';
import MainBlogImage3 from '../assets/img/MainBlogImage3.jpg';
import AuthorImage1 from '../assets/img/AuthorImage1.jpg';
import AuthorImage2 from '../assets/img/AuthorImage2.jpg';
import AuthorImage3 from '../assets/img/AuthorImage3.jpg';

const SectionBlog = () => {
  // Data for blog cards
  const blogCardData = [
    {
      title: 'The most Popular Business, Of the Year',
      date: 'May 4th, 2022',
      blogImage: MainBlogImage1,
      authorImage: AuthorImage1,
      authorName: 'Ranold Jeff.',
    },
    {
      title: 'The most Popular Business, Of the Year',
      date: 'May 4th, 2022',
      blogImage: MainBlogImage2,
      authorImage: AuthorImage2,
      authorName: 'Ranold Jeff.',
    },
    {
      title: 'The most Popular Business, Of the Year',
      date: 'May 4th, 2022',
      blogImage: MainBlogImage3,
      authorImage: AuthorImage3,
      authorName: 'Elaine Luna',
    },
  ];
  return (
    <section className='bg-secondary font-raleway'>
      <div className='flex flex-col justify-center mb-20 container mx-auto lg:w-10/12 md:w-11/12 px-4 py-24 md:my-5'>
        <div className='flex flex-col w-full text-center justify-center items-center mb-14'>
          <h1 className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-center font-bold`}>\ Our Blog \</h1>
          {/* Main title */}
          <p className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>Latest Post</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-2'>
          {/* Loop through card data to generate individual cards */}
          {blogCardData.map((card, index) => {
            return (
              <div key={index} className='bg-white  flex flex-col justify-center rounded-xl p-8 gap-y-6 shadow-lg'>
                <img src={card.blogImage} alt='' />
                <div>
                  <h3 className='text-3xl text-accent font-semibold'>{card.title}</h3>
                  <div className='flex justify-between  items-center mt-5 '>
                    <div className='flex  items-center  gap-x-2 '>
                      <div>
                        <img src={card.authorImage} alt='' />
                      </div>
                      <p className='text-lg font-semibold text-primary'>{card.authorName}</p>
                    </div>
                    <div>
                      <p className=''>{card.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
