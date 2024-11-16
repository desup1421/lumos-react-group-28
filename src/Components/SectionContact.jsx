import React from 'react';

const SectionContact = () => {
  // Data for contact cards
  const contactCardData = [
    {
      icon: 'bx bx-phone-call', // Icon for phone contact
      title: 'Call Anytime', // Title for the card
      description: [
        {
          des_1: '+ 91 23678 27867', // First phone number
          des_2: '+ 91 67678 92878', // Second phone number
        },
      ],
    },
    {
      icon: 'bx bxs-envelope', // Icon for email contact
      title: 'Send Email', // Title for email contact
      description: [
        {
          des_1: 'connect@itfirms.com', // First email address
          des_2: 'hello@itfirms.com', // Second email address
        },
      ],
    },
    {
      icon: 'bx bxs-location-plus', // Icon for location
      title: 'Visit Us', // Title for physical address
      description: [
        {
          des_1: '20 Island Park Road, ', // Address line 1
          des_2: 'New Jearsy, New York, USA', // Address line 2
        },
      ],
    },
  ];

  // Data for social media icons
  const contactCardSosial = [
    { icon: 'bx bxl-linkedin' }, // LinkedIn icon
    { icon: 'bx bxl-instagram' }, // Instagram icon
    { icon: 'bx bxl-facebook' }, // Facebook icon
    { icon: 'bx bxl-twitter' }, // Twitter icon
  ];

  return (
    <section className='bg-primary py-32 font-raleway'>
      {' '}
      {/* Main container for the contact section */}
      {/* Section header */}
      <div className='flex justify-center mb-20'>
        <div className='flex flex-col w-full text-center justify-center items-center'>
          {/* Title and subtitle */}
          <h1 className='text-accent text-xl py-1 flex lg:text-[24px] md:text-[20px] text-center font-bold'>\ Get In Touch \</h1>
          <p className='text-white lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] py-1 font-semibold text-left'>Hey! Let’s Talk</p>
        </div>
      </div>
      {/* Main content */}
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:gap-x-10 gap-y-10'>
          {/* Contact form */}
          <div className='col-span-2 border p-8 rounded-xl bg-white'>
            <form>
              {' '}
              {/* Form to collect user input */}
              <div className='grid gap-4'>
                {/* Input field for first name */}
                <div>
                  <label htmlFor='hs-firstname-contacts-1' className='sr-only'>
                    First Name
                  </label>
                  <input type='text' id='hs-firstname-contacts-1' placeholder='First Name' className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm' />
                </div>

                {/* Input field for email */}
                <div>
                  <label htmlFor='hs-email-contacts-1' className='sr-only'>
                    Email
                  </label>
                  <input type='email' id='hs-email-contacts-1' placeholder='Email' className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm' />
                </div>

                {/* Input field for phone number */}
                <div>
                  <label htmlFor='hs-phone-number-1' className='sr-only'>
                    Phone Number
                  </label>
                  <input type='text' id='hs-phone-number-1' placeholder='Phone Number' className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm' />
                </div>

                {/* Textarea for additional details */}
                <div>
                  <label htmlFor='hs-about-contacts-1' className='sr-only'>
                    Details
                  </label>
                  <textarea id='hs-about-contacts-1' rows={4} placeholder='Details' className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm'></textarea>
                </div>
              </div>
              {/* Submit button */}
              <div className='mt-4'>
                <button type='submit' className='w-32 py-3 px-4 text-sm font-medium rounded-lg bg-accent text-white hover:bg-blue-700'>
                  Send Now
                </button>
              </div>
            </form>
          </div>

          {/* Contact cards */}
          <div>
            <div className='p-8 bg-white rounded-xl'>
              <div className='flex flex-col gap-y-[30px]'>
                {/* Loop through contact card data */}
                {contactCardData.map((item, index) => (
                  <div key={index} className='flex gap-4'>
                    {/* Icon for each contact card */}
                    <div className='px-5 rounded-md bg-secondary flex items-center justify-center text-accent'>
                      <i className={`${item.icon} text-[30px]`}></i>
                    </div>

                    {/* Title and description */}
                    <div>
                      <h3 className='text-accent font-semibold text-[20px]'>{item.title}</h3>
                      {item.description.map((desc, index) => (
                        <div key={index} className='text-[14px]'>
                          <p>{desc.des_1}</p>
                          <p>{desc.des_2}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social media links */}
              <div className='mt-[50px]'>
                <h3 className='text-primary text-[24px] font-semibold text-center'>Follow Us</h3>
                <div className='flex gap-4 mt-4 justify-center text-white text-2xl'>
                  {/* Loop through social media icons */}
                  {contactCardSosial.map((item, index) => (
                    <div key={index} className='border px-4 py-3 rounded-md bg-accent'>
                      <i className={item.icon}></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
