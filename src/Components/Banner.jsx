import React from "react";
import Button from "./Button";

/**
* Component params.
* @param {image} link - src images
* @param {text} text - text for banner
* @param {button} text - text button
* @returns {React.Component} - react component for card
*/
const Banner = ({ image, text, button }) => {
  return (
    <div className={`relative w-full bg-cover overflow-hidden p-3 rounded-md`}>
      <div>
        <img className="absolute top-0 left-0 w-full" src={image} alt="banner image" />
      </div>
      <div className="absolute inset-0 bg-primary/80 rounded-md"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white min-h-36">
				<q className="text-white text-l font-semibold mb-2 text-center">
					{text}
				</q>
				<Button>{button}</Button>
      </div>
    </div>
  );
};

export default Banner;
