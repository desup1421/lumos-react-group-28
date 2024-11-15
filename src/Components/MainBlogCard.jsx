import React from "react";

const MainBlogCard = ({
  cardImage,
  cardTitle,
  cardDate,
  authorName,
  authorImage,
  readTime,
  direction,
}) => {
  return (
    <div
      className={`flex flex-${direction} bg-white border shadow-sm rounded-xl p-6`}
    >
      <img
        src={cardImage}
        alt="Card Image"
        className="w-80 h-auto rounded-xl"
      />
      <div className="pt-4 md:pt-5 px-5">
        <h3 className="text-sm font-bold text-gray-800">{cardDate}</h3>
        <p className="mt-1 text-accent text-xl font-bold">{cardTitle}</p>
        <div className="flex flex-row justify-between">
          <div className="pt-4 md:ty-5 flex flex-row justify-between items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src={authorImage}
              alt="Card Image"
            />
            <p className=" text-base text-primary font-bold">{authorName}</p>
          </div>
          <div className="pt-4 md:pt-5 text-end px-5">
            <p className="mt-5 text-sm text-gray-500">
              {"2 Min Read" && readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogCard;
