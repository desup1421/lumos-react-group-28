import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import ContactCard from "../Components/ContactCard";
import Banner from "../Components/Banner";
import bannerImg from "../assets/img/banner.jpeg";
 
const Contact = () => {
  return (
    <div>
      <div>
        <Header breadcrumb={"Contact"} />
        <SectionTitle
          sectionTitle={"Hey! Let’s Talk"}
          breadcrumb={"Get in Touch"}
          position={"center"}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center px-5 py-10 gap-8">
        <ContactForm />
        <ContactCard />
      </div>
      <div className="w-4/5 md:w-3/5 mx-auto mb-20">
          <Banner
            image={bannerImg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            button="Learn More"
          />
        </div>
    </div>
  );
};
 
export default Contact;