import React from "react";
import Logo from "../assets/img/Vector.jpg";

const Footer = () => {
  const contactCardSosial = [
    { icon: "bx bxl-linkedin" },
    { icon: "bx bxl-instagram" },
    { icon: "bx bxl-facebook" },
    { icon: "bx bxl-twitter" },
  ];

  const services = [
    "Web Design/Development",
    "App Development",
    "UI/UX Design",
    "HubSpot Integration",
    "Email Marketing",
    "Website Migration",
  ];

  const careers = [
    {
      title: "ReactJS Dev.",
      experience: "1-5 Years of Exp.",
      logo: "bx bxl-react",
    },
    {
      title: "Wordpress Dev.",
      experience: "1-5 Years of Exp.",
      logo: "bx  bxl-wordpress",
    },
    {
      title: "Python Developer",
      experience: "1-5 Years of Exp.",
      logo: "bx bxl-wix",
    },
  ];

  return (
    <div className="bg-navy py-10 bg-primary text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto px-8">
        {/* Logo and Social Icons */}
        <div className="flex flex-col gap-6">
          <a
            className="flex items-center gap-2 font-semibold text-xl text-white focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Brand"
          >
            <img src={Logo} alt="Logo" />
            Logoipsum
          </a>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at
          </p>
          <div className="flex gap-x-4">
            {contactCardSosial.map((item, index) => (
              <div
                key={index}
                className="border px-4 py-3 rounded text-accent bg-secondary "
              >
                <i className={item.icon}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="py-2 text-2xl font-semibold border-b-4 border-accent max-w-fit mb-4">
            Services
          </h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Career Section */}
        <div>
          <h2 className="py-2 text-2xl font-semibold border-b-4 border-accent max-w-fit mb-4">
            Career
          </h2>
          <ul className="space-y-4">
            {careers.map((career, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="border px-4 py-3 rounded text-accent bg-secondary text-2xl">
                  <i className={career.logo}></i>
                </div>
                <div>
                  <h3 className="font-semibold">{career.title}</h3>
                  <p className="text-sm">{career.experience}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="py-2 text-2xl font-semibold border-b-4 border-accent max-w-fit mb-4">
            Subscribe Us
          </h2>
          <p className="mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-white text-black focus:outline-none"
            />
            <div className="mt-5 justify-end w-full flex">
              <button className="py-3 px-8  bg-accent text-white rounded-lg  hover:bg-accent-dark transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
