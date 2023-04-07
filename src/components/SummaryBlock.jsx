import React from 'react'
import {users} from '../data/dummyUsers'
import { Link } from 'react-router-dom'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

export const SummaryBlock = () => {
  return (
    <div className='flex items-end justify-between max-w-[70%] p-4 bg-slate-400'>
      <div>
        <h5>USERS</h5>
        <h1 className='text-3xl'>18</h1>
        <Link className='text-[12px] py-1 px-4 rounded-sm' to='/blogs'>see all</Link>
      </div>
      <SupervisedUserCircleIcon sx={{fontSize:'30px'}}/>
    </div>
  )
}
