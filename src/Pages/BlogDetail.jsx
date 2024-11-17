import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const { slug } = useParams();
  const { dataApi } = useFetch(`article/${slug}`);

  useEffect(() => {
    setBlog(dataApi);
  }, [dataApi]);

  //if blog not found
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div>
        {/* Header */}
        <Header breadcrumb={'Blog Detail'} />

        {/* Blog Content START*/}
        <article>
          <div className='flex flex-col items-center justify-center mt-0'>
            <div className='w-full px-6 md:px-16 bg-secondary py-10'>
              {/* Title START */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center md:my-10 md:mx-16'>
                {/* Button section - left */}
                <div className='flex justify-start w-full'>
                  <button className='bg-accent text-white px-2 md:px-10 py-2 rounded hover:bg-primary transition flex items-center'>
                    <i className='bx bx-arrow-back mr-2'></i>
                    Back
                  </button>
                </div>

                {/* Title section - center */}
                <div className='col-span-1 flex justify-center w-full'>
                  <h1 className='text-3xl my-6 text-center text-primary font-bold'>{blog.title}</h1>
                </div>

                {/* Empty section - right */}
                <div className='w-full'></div>
              </div>
              {/* Title END */}

              {/* Blog info START */}
              <div className='flex items-center mt-2 justify-start w-full px-2 md:px-16'>
                <span className='text-lg font-semibold'>{blog.writer}</span>
                <span className='ml-4 text-gray-500'>{blog.date}</span>
              </div>
              <div className='mt-4 px-2 md:px-16'>
                <span className='font-semibold'>Keywords: </span>
                <span>{blog === !null && blog.meta_tag.join(', ')}</span>
              </div>
            </div>
            {/* Blog info END */}

            {/* Blog content START */}
            <div className='mt-8 px-6 md:px-16 md:w-4/5 w-8/10 mx-auto py-4'>{blog.content}</div>
            {/* Blog content END */}
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
