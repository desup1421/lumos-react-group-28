import React from 'react';
import Navbar from './Layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Footer from './Layouts/Footer';
import BlogDetail from './Pages/BlogDetail';
import TestimonialSection from './Components/SectionTestimonial';
import { SchemaProvider } from './context/SchemaContext';

function App() {
  return (
    <SchemaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blog/:slug' element={<BlogDetail />} />
          <Route path='/testimonial' element={<TestimonialSection />} />
        </Routes>
        <Footer />
      </Router>
    </SchemaProvider>
  );
}

export default App;
