import React from 'react'

const PortfolioCard = ({image, title, description}) => {
  return (
    <div className="flex flex-col rounded-lg w-full md:w-[75%]">
        <img src={image} alt="" />
        <div className='p-4'>
        <h4 className='text-md font-semibold'>{title}</h4>
        <p className='text-sm text-slate-400'>{description}</p>
        </div>
    </div>
  )
}

export default PortfolioCard