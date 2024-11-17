import React from 'react';
import Header from '../Components/Header';
import SectionMainBlog from '../Components/SectionMainBlog';
import SectionBlog from '../Components/SectionBlog';
import SectionBanner from '../Components/SectionBanner';

const Blogs = () => {
  return (
    <>
      {/* Header Section Start*/}
      <Header breadcrumb={'Blogs'} />
      {/* Header Section End*/}

      {/* Main Blog Section Start*/}
      <SectionMainBlog />
      {/* Main Blog Section End*/}

      {/* Blog Section Start*/}
      <SectionBlog />
      {/* Blog Section End*/}

      {/* Banner Section Start*/}
      <SectionBanner />
      {/* Banner Section End*/}
    </>
  );
};

export default Blogs;
