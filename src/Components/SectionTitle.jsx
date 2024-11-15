import React from "react";

const SectionTitle = ({ breadcrumb, sectionTitle, position }) => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-32 pl-3 pr-10">
        {/* position for text alignment */}
        <h1 className={`text-accent text-xl py-1 text-${position} font-bold`}>
          \ {breadcrumb} \
        </h1>
        <p className={`text-primary text-[2rem] py-1 font-bold text-${position}`}>
          {sectionTitle}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
