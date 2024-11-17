import React from 'react';
import Header from '../Components/Header';
import SectionAbout from '../Components/SectionAbout';
import SectionLeader from '../Components/SectionLeader';
import SectionBanner from '../Components/SectionBanner';
import { useSchema } from '../context/SchemaContext';
import { Helmet } from 'react-helmet';

const About = () => {
  const schema = useSchema();
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name='description' content='Welcome to the home page of Your Website. We provide the best services in town.' />
        <script type='application/ld+json'>{JSON.stringify(schema.about)}</script>
      </Helmet>
      <Header breadcrumb='About' />

      {/* About Us Section Start*/}
      <SectionAbout />
      {/* About Us Section End*/}

      {/* Our Leaders Section Start */}
      <SectionLeader />
      {/* Our Leaders Section End */}

      {/* Banner Section  Start*/}
      <SectionBanner />
      {/* Banner Section End*/}
    </>
  );
};

export default About;
