import React from 'react';
import Header from '../Components/Header';
import SectionTitle from '../Components/SectionTitle';
import MainBlogCard from '../Components/MainBlogCard';
import BlogCard from '../Components/BlogCard';
import BlogImage from '../assets/img/Rectangle25-2.jpg';
import BlogProfile from '../assets/img/Ellipse4-1.jpg';

const Blogs = () => {
  return (
    <>
      <Header breadcrumb={'Blogs'} />
      <div className='flex flex-col items-center justify-center mt-20'>
        <SectionTitle sectionTitle={'Latest Blogs'} breadcrumb={'Our Blogs'} position="center" />
        <div className='flex mx-auto justify-center'>
          <div>
            <MainBlogCard 
              cardImage={BlogImage}
              cardTitle='The most popular business of the year'
              cardDate='12th June 2023'
              authorName='Ranold Jeff.'
              authorImage={BlogProfile}
              readTime='2 Min Read'
              direction='col' 
            />
          </div>
          <div>
            <div>
              <MainBlogCard 
                cardImage={BlogImage}
                cardTitle='The most popular business of the year'
                cardDate='12th June 2023'
                authorName='Ranold Jeff.'
                authorImage={BlogProfile}
                readTime='2 Min Read'
                direction='row' 
              />
            </div>
            <dir>
              <MainBlogCard 
                cardImage={BlogImage}
                cardTitle='The most popular business of the year'
                cardDate='12th June 2023'
                authorName='Ranold Jeff.'
                authorImage={BlogProfile}
                readTime='2 Min Read'
                direction='row' 
              />
            </dir>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-20 bg-secondary pt-24'>
        <SectionTitle sectionTitle={'Latest Blogs'} breadcrumb={'Our Blogs'} />
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8'>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
