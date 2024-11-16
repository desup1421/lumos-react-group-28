import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // Import only the basic Swiper styles
import "swiper/css/pagination"; // Optional: for pagination
import "swiper/css/navigation"; // Optional: for navigation (arrows)

import Elipse4 from "../assets/img/Ellipse4.jpg";
import Elipse41 from "../assets/img/Ellipse4-1.jpg";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at ExampleCorp",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: Elipse4,
  },
  {
    name: "Jane Smith",
    title: "Marketing Director at TechSolutions",
    feedback: "Curabitur ligula sapien, tincidunt non, euismod vitae.",
    img: Elipse41,
  },
  {
    name: "Mike Johnson",
    title: "CTO at WebTech",
    feedback: "Nullam quis risus eget urna mollis ornare.",
    img: Elipse4,
  },
  {
    name: "Emily Brown",
    title: "HR Manager at HR Solutions",
    feedback: "Nullam quis risus eget urna mollis ornare.",
    img: Elipse4,
  },
  {
    name: "David Wilson",
    title: "Product Manager at TechPro",
    feedback: "Nullam quis risus eget urna mollis ornare.",
    img: Elipse4,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <SectionTitle
          breadcrumb="From Our Customers"
          sectionTitle="Testimonial"
          position="center"
        />
        <Swiper
          modules={[Pagination]} // Enable pagination modules
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Show 1 slide at a time
          loop={true} // Loop the slides
          autoplay={{ delay: 3000 }} // Auto slide every 5 seconds
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on small screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
          }}
          centeredSlides={true}
          pagination={{ clickable: true }} // Enable pagination dots
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-gray-600 mb-4">
                  "{testimonial.feedback}"
                </p>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
