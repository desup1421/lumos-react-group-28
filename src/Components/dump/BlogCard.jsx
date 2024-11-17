import React from "react";

/**
* Component params.
* @param {image} link - src images
* @param {title} text - text title card
* @param {imageProfile} link - src form profile image
* @param {name} text - text name
* @param {date} text - text date
* @returns {React.Component} - react component for card
*/
const BlogCard = ({image, title, imageProfile, name, date}) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-2">
      <img
        className="w-full h-auto rounded-t-xl"
        src={image}
        alt="Card Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-accent mt-2 mb-8">
          {title}
        </h3>
        <div className="grid grid-cols-5 gap-2">
            <div>
               <img className="rounded-full w-20" src={imageProfile} alt="" />
            </div>
            <div className="col-span-2 flex items-center text-sm ">
                <p>{name}</p>
            </div>
            <div className="col-span-2 flex items-center justify-end text-xs text-[#252525]/70">
               <p>{date}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
