import React from 'react';
import Header from '../Components/Header';
import SectionService from '../Components/SectionService';
import SectionBanner from '../Components/SectionBanner';
import SectionWhatWeDo from '../Components/SectionWhatWeDo';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const Services = () => {
  const schema = useSchema();
  return (
    <>
      <Helmet>
        <title>Service Page</title>
        <meta name='description' content='Welcome to the home page of Your Website. We provide the best services in town.' />
        <script type='application/ld+json'>{JSON.stringify(schema.services)}</script>
      </Helmet>
      {/* Header Section Start */}
      <Header breadcrumb={'Services'} />
      {/* Header Section End */}

      {/* Srvice Section Start */}
      <SectionWhatWeDo />
      {/* Srvice Section End */}

      {/* Services Section Start */}
      <SectionService />
      {/* Services Section End */}

      {/* Banner Section Start */}
      <SectionBanner />
      {/* Banner Section End */}
    </>
  );
};

export default Services;
