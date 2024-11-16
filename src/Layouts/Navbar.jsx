import React, { useState } from 'react';
import Logo from '../assets/img/Vector.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Our Services',
      url: '/services',
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container mx-auto lg:w-10/12 md:w-11/12 px-2'>
      {/* Header */}
      <header className='flex items-center justify-between w-full bg-white border-gray-200 py-4'>
        <Link className='flex items-center gap-2 font-bold  text-2xl text-primary' to='/' aria-label='Brand'>
          <img src={Logo} alt='Brand Logo' />
          Logoipsum
        </Link>
        {/* Collapse Button for Mobile */}
        <button type='button' onClick={toggleMenu} className='md:hidden flex items-center p-2 text-gray-800 hover:bg-gray-100 rounded-lg' aria-expanded={isMenuOpen} aria-label='Toggle navigation'>
          {/* Icon for Open Menu */}
          <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
          {/* Icon for Close Menu */}
          <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
          <span className='sr-only'>Toggle navigation</span>
        </button>
        {/* Desktop Navigation Start*/}
        <nav className='hidden md:flex gap-x-5 text-center items-center '>
          <ul className='flex lg:gap-x-5 md:gap-x-2 text-base text-primary hover:text-accent transition-colors duration-300 ease-in-out mr-10 font-raleway font-semibold'>
            {/* Looping through navLinks and rendering links */}
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className='text-primary hover:text-accent transition-colors duration-[10ms] ease-in-out delay-150'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className='px-4 py-2 bg-accent text-white rounded-md'>Get In Touch</button>
        </nav>
        {/* Desktop Navigation End*/}
      </header>

      {/* Sidebar Overlay for Mobile */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} aria-hidden='true'></div>

      {/* Sidebar for Mobile */}
      <aside className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50`} aria-label='Mobile Menu'>
        <div className='p-4 flex items-center justify-between border-b'>
          <Link className='flex items-center gap-2 font-semibold text-xl text-black' to='/'>
            <img src={Logo} alt='Brand Logo' />
            Logoipsum
          </Link>
          <button onClick={toggleMenu} className='text-gray-800 hover:text-gray-600' aria-label='Close menu'>
            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <nav className='p-4 flex flex-col space-y-4 font-raleway font-semibold'>
          {/* Looping through navLinks and rendering links */}
          {navLinks.map((link, index) => (
            <Link key={index} to={link.url} className='text-primary' onClick={toggleMenu}>
              {link.name}
            </Link>
          ))}
          {/* Looping through navLinks and rendering links */}

          <button className='px-4 py-2 bg-accent text-white rounded-md w-full' onClick={toggleMenu}>
            Get In Touch
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
