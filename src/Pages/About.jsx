import React from 'react';
import Header from '../Components/Header';
import SectionAbout from '../Components/SectionAbout';
import SectionLeader from '../Components/SectionLeader';
import SectionBanner from '../Components/SectionBanner';

const About = () => {
  return (
    <>
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
