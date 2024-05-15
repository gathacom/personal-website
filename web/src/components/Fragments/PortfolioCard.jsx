import React from "react";

const PortfolioCard = ({ image, title, description, stacks }) => {
  return (
    <div className="flex flex-col rounded-lg w-[90%] md:w-[75%] md:ps-20 md:pe-10">
      <img src={image} alt={`thumbnail ${title}`} className="w-full object-cover"/>
      <div className="p-4">
        <h4 className="text-md font-semibold">{title}</h4>
        <div className="flex flex-row flex-wrap gap-2">
          {stacks.map((stack)=>{
            return(
              <p className={`border-b-4 border-emerald-500 text-base font-medium md:font-semibold`}>{stack.name}</p>
            )
          })}
        </div>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
