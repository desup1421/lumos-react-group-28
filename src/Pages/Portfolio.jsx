import React from 'react';
import Header from '../Components/Header';
import SectionPortFolio from '../Components/SectionPortfolio';
import SectionBanner from '../Components/SectionBanner';

const Portfolio = () => {
  return (
    <>
      {/* Header Section Start */}
      <Header breadcrumb={'Portfolio'} />
      {/* Header Section End */}

      {/* Portfolio Section Start */}
      <SectionPortFolio />
      {/* Portfolio Section End */}

      {/* Banner Section Start */}
      <SectionBanner />
      {/* Banner Section End */}
    </>
  );
};

export default Portfolio;
