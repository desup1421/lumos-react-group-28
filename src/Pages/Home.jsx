import React from "react";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import Group65Image from "../assets/img/Group65.jpg";
import MaskGroupImage from "../assets/img/Maskgroup.jpg";
import InfoCard from "../Components/InfoCard";
import BlackIcon from "../assets/img/Black.jpg";
import MainCard from "../Components/MainCard";
import Black5Icon from "../assets/img/Black-5.jpg";
import Black6Icon from "../assets/img/Black-6.jpg";
import Black7Icon from "../assets/img/Black-7.jpg";
import Black8Icon from "../assets/img/Black-8.jpg";

const Home = () => {
  const cardDataOurProcess = [
    {
      icon: Black5Icon,
      title: "Research",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      number: "1",
    },
    {
      icon: Black6Icon,
      title: "Design",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
      number: "2",
    },
    {
      icon: Black7Icon,
      title: "Develope",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
      number: "3",
    },
    {
      icon: Black8Icon,
      title: "Test",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
      number: "4",
    },
  ];

  return (
    <div>
      {/* Hero section START */}
      <div className="flex-col-reverse flex md:flex-row items-center justify-center px-46 py-10">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle
            breadcrumb="We are here"
            sectionTitle="Better Insights For Business Growth"
            position={"left"}
          />
          <div className="pl-3">
            <Button>View More</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Group65Image}
            alt=""
            className="max-w-lg max-h-lg rounded-xl"
          />
        </div>
      </div>
      {/* Hero section END */}

      {/* About section START */}
      <div className="flex flex-col md:flex-row items-center justify-center px-52 py-10 bg-secondary">
        <div className="flex flex-col items-center justify-center">
          <img
            src={MaskGroupImage}
            alt=""
            className="max-w-lg max-h-lg rounded-5"
          />
        </div>

        <div className="flex flex-col items-start justify-center px-5">
          <SectionTitle
            breadcrumb="We are here"
            sectionTitle="One of the Fastest Way to Business Growth"
            position={"left"}
          />
          <p className="text-base pl-3 pr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <div className="mt-5 ml-3">
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
      {/* About section END */}

      {/* Planning section START */}
      <div className="flex flex-col items-center justify-center px-52 py-10 pb-20">
        <SectionTitle
          breadcrumb="Planning"
          sectionTitle="Our Process"
          position={"center"}
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {cardDataOurProcess.map((card, index) => (
            <MainCard
              key={index}
              icon={card.icon}
              title={card.title}

              description={card.description}

              number={card.number}
            />
          ))}
        </div>
      </div>
      {/* Planning section END */}

      {/* What we do section START */}
      <div className="flex flex-col md:flex-row items-center justify-center px-52 py-10 bg-secondary">
        <div className="flex flex-col items-center justify-center">
          <img
            src={MaskGroupImage}
            alt=""
            className="max-w-lg max-h-lg rounded-5"
          />
        </div>

        <div className="flex flex-col items-start justify-center px-5">
          <SectionTitle
            breadcrumb="What We Do"
            sectionTitle="We Develope Product That People Love to Use."
          />
          <p className="text-base pl-3 pr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed
          </p>
          <div className="mt-5 ml-3">
            <InfoCard
              bgImage="bg-secondary"
              title="Get Instant Professional Advice"
              image={BlackIcon}
              desc="Ready to Help"
              number="+62 259519252"
            />

            <Button>View More </Button>

          </div>
        </div>
      </div>
      {/* What we do section END */}
    </div>
  );
};

export default Home;
