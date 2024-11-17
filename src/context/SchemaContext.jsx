/* eslint-disable no-unused-vars */
// SchemaContext.js
import React, { createContext, useContext } from 'react';
import { Helmet } from 'react-helmet';

const SchemaContext = createContext();

export const SchemaProvider = ({ children }) => {
  const schemaData = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Your Website Name',
      'url': 'https://yourwebsite.com',
      'logo': 'https://yourwebsite.com/logo.png',
    },
    homepage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Home Page',
      'url': 'https://yourwebsite.com/',
      'description': 'Welcome to the home page of Your Website.',
    },
    about: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Us',
      'url': 'https://yourwebsite.com/about',
      'description': 'Learn more about Your Website and our team.',
    },
    contact: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Us',
      'url': 'https://yourwebsite.com/contact',
      'description': 'Get in touch with Your Website.',
    },
    services: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Our Services',
      'url': 'https://yourwebsite.com/service',
      'description': 'Explore our range of services tailored to your needs.',
    },
    portfolio: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Our Portfolio',
      'url': 'https://yourwebsite.com/portfolio',
      'description': 'View our portfolio of previous work and projects.',
    },
    blog: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Our Blog',
      'url': 'https://yourwebsite.com/blog',
      'description': 'Read our latest blog posts on industry insights and news.',
    },
    blog_detail: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Blog Post',
      'url': 'https://yourwebsite.com/blog',
      'description': 'Read our latest blog posts on industry insights and news.',
    },
  };

  return <SchemaContext.Provider value={schemaData}>{children}</SchemaContext.Provider>;
};

export const useSchema = () => useContext(SchemaContext);
