import React from 'react';
import SectionHome from '../Components/SectionHome';
import SectionAbout from '../Components/SectionAbout';
import SectionPlaning from '../Components/SectionPlaning';
import SectionWhatWeDo from '../Components/sectionWhatWeDo';
import SectionService from '../Components/SectionService';
import SectionLeader from '../Components/SectionLeader';
import SectionContact from '../Components/SectionContact';
import SectionMainBlog from '../Components/SectionMainBlog';

const Home = () => {
  return (
    <div>
      {/* Hero section START */}
      <SectionHome />
      {/* Hero section END */}

      {/* About section START */}
      <SectionAbout />
      {/* About section END */}

      {/* Planning section START */}
      <SectionPlaning />
      {/* Planning section END */}

      {/* What we do section START */}
      <SectionWhatWeDo />
      {/* What we do section END */}
      {/* Service section START */}
      <SectionService />
      {/* Service section END */}
      {/* Leader section START */}
      <SectionLeader />
      {/* Leader section END */}
      {/* Contact Section Start */}
      <SectionContact />
      {/* Contact Section End */}
      {/* MainBlog Section Start */}
      <SectionMainBlog />
      {/* MainBlog Section End */}
    </div>
  );
};

export default Home;
