import React from 'react';
import Header from '../Components/Header';
import SectionMainBlog from '../Components/SectionMainBlog';
import SectionBlog from '../Components/SectionBlog';
import SectionBanner from '../Components/SectionBanner';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const Blogs = () => {
  const schema = useSchema();
  return (
    <>
      <Helmet>
        <title>Blogs Page</title>
        <meta name='description' content='Welcome to the home page of Your Website. We provide the best services in town.' />
        <script type='application/ld+json'>{JSON.stringify(schema.blog)}</script>
      </Helmet>
      ;{/* Header Section Start*/}
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
