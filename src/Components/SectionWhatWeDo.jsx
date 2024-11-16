import React from "react";
import DoSectionImage from "../assets/img/DoSectionImage.jpg";
import GoalIcon from "../assets/img/goalIcon.png";
import VisionIcon from "../assets/img/visionIcon.png";

const SectionWhatWeDo = () => {
  return (
    <section className="bg-secondary">
      {/* Main container with padding and responsive width */}
      <div className="container mx-auto lg:w-10/12 md:w-11/12 px-4 py-24 md:my-5">
        {/* Grid layout with 1 column on small screens, 2 columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-y-10 gap-x-10">
          {/* Image section */}
          <div className="flex justify-end items-center ">
            <img
              className="w-full md:w-full lg:w-auto h-[490px] object-contain mb-[-40px] md:mb-4"
              src={DoSectionImage}
              alt=""
            />
            {/* Responsive image size */}
          </div>

          {/* Text and Info section */}
          <div>
            <div className="flex flex-col w-ful">
              {/* About Us heading */}
              <h1
                className={`text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-left font-bold`}
              >
                \ About Us \
              </h1>

              {/* Main title with responsive text size */}
              <p
                className={`text-primary lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left`}
              >
                One of the Fastest Way to <br /> Business Growth
              </p>
            </div>

            {/* Description text */}
            <p className="text-base lg:pr-32 mb-8 py-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed, Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed
            </p>

            {/* Info Card Section */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 ">
              <div className="flex bg-white rounded-lg">
                <div className="p-3 m-4 bg-red-100">
                  <img src={VisionIcon} alt="" />
                </div>
                <div className="flex flex-col align-bottom justify-center px-3">
                  <h4 className="text-accent font-bold">Our Vision</h4>
                  <p>It is a long esta -blished fact that</p>
                </div>
              </div>
              <div className="flex bg-white rounded-lg">
                <div className="p-3 m-4 bg-red-100">
                  <img src={GoalIcon} alt="" />
                </div>
                <div className="flex flex-col align-bottom justify-center px-3">
                  <h4 className="text-accent font-bold">Our Goal</h4>
                  <p>It is a long esta -blished fact that</p>
                </div>
              </div>
            </div>
            {/* Info Card Section */}
            <button className="px-4 py-2 bg-accent text-white rounded-md mt-5">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhatWeDo;
