import React from 'react';
import Header from '../Components/Header';
import SectionService from '../Components/SectionService';
import SectionBanner from '../Components/SectionBanner';
import SectionWhatWeDo from '../Components/SectionWhatWeDo';

const Services = () => {
  return (
    <>
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
