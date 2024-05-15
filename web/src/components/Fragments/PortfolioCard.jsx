import React from "react";

const PortfolioCard = ({ image, title, description, stacks }) => {
  return (
    <div className="flex flex-col rounded-lg w-[90%] md:w-[75%]">
      <img src={image} alt="" />
      <div className="p-4">
        <h4 className="text-md font-semibold">{title}</h4>
        <div className="flex flex-row flex-wrap gap-2">
          {stacks.map((stack)=>{
            return(
              <p className={`border-b-4 border-[#${stack.color}] text-base font-semibold`}>{stack.name}</p>
            )
          })}
        </div>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
