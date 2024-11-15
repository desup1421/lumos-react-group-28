import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import Button from '../Components/Button';
import MaskGroupImage from '../assets/img/Maskgroup.jpg';
import InfoCard from '../Components/InfoCard';
import BlackIcon from '../assets/img/Black.jpg';
import SectionHome from '../Components/SectionHome';
import SectionAbout from '../Components/SectionAbout';
import SectionPlaning from '../Components/SectionPlaning';

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
      <div className='flex flex-col md:flex-row items-center justify-center px-52 py-10 bg-secondary'>
        <div className='flex flex-col items-center justify-center'>
          <img src={MaskGroupImage} alt='' className='max-w-lg max-h-lg rounded-5' />
        </div>

        <div className='flex flex-col items-start justify-center px-5'>
          <SectionTitle breadcrumb='What We Do' sectionTitle='We Develope Product That People Love to Use.' />
          <p className='text-base pl-3 pr-10'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
          </p>
          <div className='mt-5 ml-3'>
            <InfoCard bgImage='bg-secondary' title='Get Instant Professional Advice' image={BlackIcon} desc='Ready to Help' number='+62 259519252' />

            <Button>View More </Button>
          </div>
        </div>
      </div>
      {/* What we do section END */}
    </div>
  );
};

export default Home;
