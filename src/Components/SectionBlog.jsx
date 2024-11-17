import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const SectionBlog = ({ limit }) => {
  const { dataApi } = useFetch(`article?page=1&limit=${limit}`);
  const [blog, setBlog] = useState([]);
  // Data for blog cards
  useEffect(() => {
    setBlog(dataApi);
  }, [dataApi]);

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
          {blog && blog.length > 1 ? (
            blog.map((card, index) => {
              return (
                <div key={index} className='bg-white  flex flex-col justify-center rounded-xl p-8 gap-y-6 shadow-lg'>
                  <img src={card.imageUrl} alt='' />
                  <div>
                    <h3 className='text-3xl text-accent font-semibold'>{card.title}</h3>
                    <div className='flex justify-between  items-center mt-5 '>
                      <div className='flex  items-center  gap-x-2 '>
                        <div>{/* <img src={card.authorImage} alt='' /> */}</div>
                        <p className='text-lg font-semibold text-primary'>{card.writer}</p>
                      </div>
                      <div>
                        <p className=''>{card.date}</p>
                      </div>
                    </div>
                  </div>
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

export default SectionBlog;
