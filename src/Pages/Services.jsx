import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import InfoCard from "../Components/InfoCard";
import MainCard from "../Components/MainCard";
import Banner from "../Components/Banner";
import bannerImg from "../assets/img/banner.jpeg";
import Black5Icon from "../assets/img/Black-5.jpg";
// import headerImage from "../assets/img/header.jpg";

const Services = () => {
  return (
    <div className="mb-32">
      <Header breadcrumb="Services" />
      <section className="p-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          <div className="col-span-1 mb-12">
            <img
              className="object-cover w-4/5 mx-auto"
              src="https://picsum.photos/200/200"
              alt=""
            />
          </div>

          <div className="col-span-2">
            <SectionTitle
              breadcrumb="What We Do"
              sectionTitle="We Develope Product That People Love to Use."
              position="left"
            />

            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quae.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="col-1">
                <InfoCard
                  bgImage="bg-primary"
                  title="Our Vision"
                  image="https://picsum.photos/200"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
                />
              </div>
              <div className="col-1">
                <InfoCard
                  bgImage="bg-primary"
                  title="Our Vision"
                  number="02"
                  image="https://picsum.photos/200"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 p-20">
        <SectionTitle
          breadcrumb="What We Do"
          sectionTitle="We Develope Product That People Love to Use."
          position="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          <MainCard
            icon={Black5Icon}
            title="Web Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
          />

          <MainCard
            icon={Black5Icon}
            title="Web Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
          />

          <MainCard
            icon={Black5Icon}
            title="Web Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
          />
        </div>
      </section>

      <section className="flex justify-center items-center my-10">
        <div className="w-4/5 md:w-3/5">
          <Banner
            image={bannerImg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            button="Learn More"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
