import React from 'react';
import Header from '../Components/Header';
import SectionContact from '../Components/SectionContact';
import SectionBanner from '../Components/SectionBanner';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const Contact = () => {
  const schema = useSchema();
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name='description' content='Welcome to the home page of Your Website. We provide the best services in town.' />
        <script type='application/ld+json'>{JSON.stringify(schema.contact)}</script>
      </Helmet>
      ;{/* Header Section Start*/}
      <Header breadcrumb={'Contact'} />
      {/* Header Section End*/}
      {/* Contact Section Start*/}
      <SectionContact />
      {/* Contact Section End*/}
      {/* Banner Section Start*/}
      <SectionBanner />
      {/* Banner Section End*/}
    </>
  );
};

export default Contact;
