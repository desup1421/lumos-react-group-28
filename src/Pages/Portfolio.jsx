import React from 'react';
import PortfolioGroup from '../Components/PortfolioGroup';
import Banner from '../Components/Banner';
import bannerImg from '../assets/img/banner.jpeg';

const Portfolio = () => {
  return (
    <div>
      <section>
        <PortfolioGroup />
      </section>
      <section className="flex justify-center items-center my-10">
				<div className="w-4/5 md:w-3/5">
					<Banner image={bannerImg} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." button="Learn More" />
				</div>
      </section>
    </div>
    
  )
}


export default Portfolio