import React from 'react';
import Header from '../Components/Header';
import SectionContact from '../Components/SectionContact';
import SectionBanner from '../Components/SectionBanner';

const Contact = () => {
  return (
    <>
      {/* Header Section Start*/}
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
