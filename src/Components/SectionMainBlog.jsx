import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const SectionMainBlog = ({ limit }) => {
  const { dataApi } = useFetch(`article?page=1&limit=${limit}`);
  const [blogs, setBlogs] = useState([]);
  // Data for blog cards
  useEffect(() => {
    setBlogs(dataApi);
  }, [dataApi]);
  return (
    <section className='container mx-auto lg:w-10/12 md:w-11/12 px-4 py-44 md:my-5 font-raleway '>
      {/* Header section of the blog */}
      <div className='flex justify-center mb-20'>
        <div className='flex flex-col w-full text-center justify-center items-center'>
          {/* Subheading for the blog section */}
          <h1 className={`text-accent text-xl py-1 flex lg:text-[35px] md:text-[20px] text-center font-bold`}>\ Our Blog \</h1>
          {/* Main title */}
          <p className={`text-primary lg:text-[4rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}>Latest Post</p>
        </div>
      </div>

      {/* Main content section for blog posts */}
      {blogs && blogs.length > 0 ? (
        <div className='grid p-8 shadow-xl border rounded-xl'>
          {/* Blog image */}
          <img className='w-full h-auto ' src={blogs[1].image} alt='' />
          <div className='grid gap-y-4'>
            {/* Blog post date */}
            <p className='text-sm text-gray-500 font-semibold mt-5'>{blogs[1].date}</p>
            {/* Blog title */}
            <h3 className=' text-accent font-bold text-2xl'>{blogs[1].title}</h3>
            {/* Author details and read time */}
            <div className='flex justify-between  items-center mt-5'>
              <div className='flex justify-center items-center gap-x-2 '>
                {/* Author's profile image */}
                <div>
                  <img className='md:w-auto w-full' alt='' />
                </div>
                {/* Author's name */}
                <p className='font-semibold text-slate-600'>{blogs[1].writer}</p>
              </div>
              {/* Reading time */}
              {/* <p className='text-sm text-slate-600'>2 Min Read</p> */}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-y-10 grid-cols-1 md:gap-x-10 px-2 '>
        {/* Highlighted blog post */}

        {/* Other blog posts */}
        {blogs && blogs.length > 1 ? (
          blogs.map((blog, index) => {
            <div key={index} className='flex gap-x-8 shadow-xl border rounded-xl'>
              <div className='p-8 md:flex md:gap-x-5'>
                {/* Blog image */}
                <img className='md:w-[250px] w-full' src={blog.image} alt='' />
                <div className='grid gap-y-4'>
                  {/* Blog post date */}
                  <p className='text-sm text-gray-500 font-semibold mt-5'>{blog.date}</p>
                  {/* Blog title */}
                  <h3 className=' text-accent font-bold text-2xl'>{blog.title}</h3>
                  {/* Author details and read time */}
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex justify-center items-center gap-x-2 '>
                      {/* Author's profile image */}
                      <div>
                        <img className='md:w-auto lg:w-auto w-full' alt='' />
                      </div>
                      {/* Author's name */}
                      <p className='font-semibold text-slate-600'>{blog.writer}</p>
                    </div>
                    {/* Reading time */}
                    {/* <p className='text-sm text-slate-600'>2 Min Read</p>   */}
                  </div>
                </div>
              </div>
            </div>;
          })
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default SectionMainBlog;
