/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
// EMBLA CAROUSEL
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
// EMBLA CAROUSEL

import Elipse4 from '../assets/img/Ellipse4.jpg';
import Elipse41 from '../assets/img/Ellipse4-1.jpg';
import SectionTitle from './SectionTitle';

const TestimonialSection = () => {
  const { dataApi, error, loading } = useFetch('testimonials');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    if (dataApi) {
      setTestimonials(dataApi);
    }
  }, [dataApi]);

  console.log(testimonials);

  // EMBLA CAROUSEL START
  // Manually set the options for Embla Carousel
  const options = {
    loop: true, // Enable infinite looping of slides
    speed: 5, // Set the slide transition speed
    dragFree: true, // Allow the slides to be dragged freely
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  // EMBLA CAROSEL END
  return (
    <section className='py-16'>
      <div className='container mx-auto text-center px-4'>
        <SectionTitle breadcrumb='From Our Customers' sectionTitle='Testimonial' position='center' />

        {/* EMBLA CAROUSEL START */}
        <div className='embla embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <div key={index} className='embla__slide p-4'>
                  <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
                    <img src={testimonial.imageUrl} alt={testimonial.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
                    <p className='text-lg text-gray-600 mb-4'>"{testimonial.feedback}"</p>
                    <p className='font-semibold text-lg'>{testimonial.name}</p>
                    <p className='text-sm text-gray-500'>{testimonial.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
          <div className='embla__controls'>
            <div className='embla__dots'>
              {scrollSnaps.map((_, index) => (
                <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')} />
              ))}
            </div>
          </div>
        </div>
        {/* EMBLA CAROUSEL END */}
      </div>
    </section>
  );
};

export default TestimonialSection;
