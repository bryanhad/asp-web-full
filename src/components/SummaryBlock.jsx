import React from 'react'
import { Link } from 'react-router-dom'

export const SummaryBlock = ({title, total, icon, linkName, path,}) => {
  return (
    <div className='flex justify-between items-end w-[70%] max-w-[350px] p-4 bg-white shadow-md'>
      <div>
        <h5 className='text-slate-400 font-semibold tracking-wide'>{title}</h5>
        <h1 className='text-3xl md:text-5xl my-2'>{total}</h1>
        <Link className='bg-slate-500 text-[12px] py-1 px-4 rounded-md text-white' to={path}>{linkName}</Link>
      </div>
      <div className='text-lg'>
        {icon}
      </div>
    </div>
  )
}
