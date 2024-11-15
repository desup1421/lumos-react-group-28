import React from 'react';
import SectionHome from '../Components/SectionHome';
import SectionAbout from '../Components/SectionAbout';
import SectionPlaning from '../Components/SectionPlaning';
import SectionWhatWeDo from '../Components/sectionWhatWeDo';

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
    </div>
  );
};

export default Home;
