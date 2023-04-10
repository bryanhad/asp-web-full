import React from 'react'
import { Link } from 'react-router-dom'

export const SummaryBlock = ({title, total, icon, linkName, path,}) => {
  return (
    <div className='flex justify-between items-end w-[70%] max-w-[350px] p-4 bg-white shadow-md'>
      <div>
        <h5>{title}</h5>
        <h1 className='text-3xl'>{total}</h1>
        <Link className='bg-slate-300 text-[12px] py-1 px-4 rounded-sm' to={path}>{linkName}</Link>
      </div>
      <div className='text-lg'>
        {icon}
      </div>
    </div>
  )
}
