import React from 'react';
import Header from '../Components/Header';
import BlackIcon from '../assets/img/Black.jpg';
import MaskGroupImage from '../assets/img/Maskgroup.jpg';
import InfoCard from '../Components/InfoCard';
import SectionTitle from '../Components/SectionTitle';
import Leader_1 from '../assets/img/Rectangle14.jpg';
import Leader_2 from '../assets/img/Rectangle15.jpg';
import Banner from '../Components/Banner';
import Banner_1 from '../assets/img/banner.jpeg';

const About = () => {
  return (
    <>
      <Header breadcrumb="About" />
      <div className="bg-secondary">
        <div className="container mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-center px-8 py-10">
          <div className="flex flex-col items-center justify-center">
            <img src={MaskGroupImage} alt="About Image" className="lg:max-w-lg max-h-lg rounded-5" />
          </div>
          <div className="flex flex-col items-start justify-center px-5 mt-10 lg:mt-0">
            <SectionTitle sectionTitle="Better Insights For Business Growth" breadcrumb="We are here" />
            <p className="text-base lg:pl-3 lg:pr-20">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <div className="mt-5 ml-3 lg:pr-20 w-full flex">
              <InfoCard
                bgImage="bg-secondary"
                title="Get Instant Professional Advice"
                image={BlackIcon}
                desc="Ready to Help"
                number="+62 259519252"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Leaders Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium mb-2">Team</p>
          <h2 className="text-navy-900 text-4xl font-bold">Our Leaders</h2>
        </div>

        {/* Grid for Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Larry F. Burnett', role: 'CEO', image: Leader_1 },
            { name: 'Meghan J. Webb', role: 'CTO', image: Leader_2 },
            { name: 'Yvonne J. Cullum', role: 'CFO', image: Leader_1 },
            { name: 'Diana H. Williams', role: 'COO', image: Leader_2 },
          ].map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-red-500 text-lg font-medium">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </div>
          ))}
        </div>

        {/* Repeat Grid for Leaders (Second Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            { name: 'Larry F. Burnett', role: 'CEO', image: Leader_1 },
            { name: 'Meghan J. Webb', role: 'CTO', image: Leader_2 },
            { name: 'Yvonne J. Cullum', role: 'CFO', image: Leader_1 },
            { name: 'Diana H. Williams', role: 'COO', image: Leader_2 },
          ].map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-red-500 text-lg font-medium">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <div className="mb-10 w-4/5 flex justify-center mt-12 lg:w-[1000px] mx-auto items-center">
        <Banner
          image={Banner_1}
          text="We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients."
          button="Learn More"
        />

      </div>
    </>
  );
};

export default About;
