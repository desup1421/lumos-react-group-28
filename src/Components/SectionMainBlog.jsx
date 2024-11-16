import React from 'react';
// Importing images for the blog and authors
import MainBlogImage1 from '../assets/img/MainBlogImage1.jpg';
import MainBlogImage2 from '../assets/img/MainBlogImage2.jpg';
import MainBlogImage3 from '../assets/img/MainBlogImage3.jpg';
import AuthorImage1 from '../assets/img/AuthorImage1.jpg';
import AuthorImage2 from '../assets/img/AuthorImage2.jpg';
import AuthorImage3 from '../assets/img/AuthorImage3.jpg';

const SectionMainBlog = () => {
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
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-y-10 grid-cols-1 md:gap-x-10 px-2 '>
        {/* Highlighted blog post */}
        <div className='grid p-8 shadow-xl border rounded-xl'>
          {/* Blog image */}
          <img className='w-full h-auto ' src={MainBlogImage1} alt='' />
          <div className='grid gap-y-4'>
            {/* Blog post date */}
            <p className='text-sm text-gray-500 font-semibold mt-5'>May 4th, 2022</p>
            {/* Blog title */}
            <h3 className=' text-accent font-bold text-2xl'>The most Popular Business Of the Year</h3>
            {/* Author details and read time */}
            <div className='flex justify-between  items-center mt-5'>
              <div className='flex justify-center items-center gap-x-2 '>
                {/* Author's profile image */}
                <div>
                  <img className='md:w-auto w-full' src={AuthorImage1} alt='' />
                </div>
                {/* Author's name */}
                <p className='font-semibold text-slate-600'>Ranold Jeff.</p>
              </div>
              {/* Reading time */}
              <p className='text-sm text-slate-600'>2 Min Read</p>
            </div>
          </div>
        </div>

        {/* Other blog posts */}
        <div className='grid grid-cols-1 gap-y-4'>
          {/* Secondary blog post 1 */}
          <div className='flex gap-x-8 shadow-xl border rounded-xl'>
            <div className='p-8 md:flex md:gap-x-5'>
              {/* Blog image */}
              <img className='md:w-[250px] w-full' src={MainBlogImage2} alt='' />
              <div className='grid gap-y-4'>
                {/* Blog post date */}
                <p className='text-sm text-gray-500 font-semibold mt-5'>May 4th, 2022</p>
                {/* Blog title */}
                <h3 className=' text-accent font-bold text-2xl'>The most Popular Business Of the Year</h3>
                {/* Author details and read time */}
                <div className='flex justify-between items-center mt-5'>
                  <div className='flex justify-center items-center gap-x-2 '>
                    {/* Author's profile image */}
                    <div>
                      <img className='md:w-auto lg:w-auto w-full' src={AuthorImage2} alt='' />
                    </div>
                    {/* Author's name */}
                    <p className='font-semibold text-slate-600'>Ranold Jeff.</p>
                  </div>
                  {/* Reading time */}
                  <p className='text-sm text-slate-600'>2 Min Read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary blog post 2 */}
           <div className='flex gap-x-8 shadow-xl border rounded-xl '>
            <div className='p-8 md:flex gap-x-5'>
              {/* Blog image */}
              <img className='md:w-[250px] w-full  md:h-full' src={MainBlogImage3} alt='' />
              <div className='grid gap-y-4'>
                {/* Blog post date */}
                <p className='text-sm text-gray-500 font-semibold mt-5'>May 4th, 2022</p>
                {/* Blog title */}
                <h3 className=' text-accent font-bold text-2xl'>The most Popular Business Of the Year</h3>
                {/* Author details and read time */}
                <div className='flex justify-between items-center mt-5'>
                  <div className='flex items-center gap-2 '>
                    {/* Author's profile image */}
                    <img src={AuthorImage3} alt='' />
                    {/* Author's name */}
                    <p className='font-semibold text-slate-600'>Ranold Jeff.</p>
                  </div>
                  {/* Reading time */}
                  <p className='text-sm text-slate-600'>2 Min Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMainBlog;
