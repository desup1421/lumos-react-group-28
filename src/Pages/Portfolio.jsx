import React from 'react';
import Header from '../Components/Header';
import SectionPortFolio from '../Components/SectionPortfolio';
import SectionBanner from '../Components/SectionBanner';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const Portfolio = () => {
  const schema = useSchema();
  return (
    <>
      <Helmet>
        <title>Portfolio Page</title>
        <meta name='description' content='Welcome to the home page of Your Website. We provide the best services in town.' />
        <script type='application/ld+json'>{JSON.stringify(schema.portfolio)}</script>
      </Helmet>
      ;{/* Header Section Start */}
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
