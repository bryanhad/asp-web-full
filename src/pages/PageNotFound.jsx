import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const PageNotFound = () => {
    const messages = ['We looked everywhere for this page.', 'Are you sure the website URL is correct?', 'Kindly get in touch with the site owner.']
  return (
    <div className='h-full w-full flex flex-col items-center p-12'>
        <SentimentVeryDissatisfiedIcon sx={{fontSize:'100px'}}/>
        <div>
            <h1 className='text-4xl tracking-wide text-center mb-2'>PAGE NOT FOUND</h1>
            <div>
                {messages.map((message, index) => <p className='text-center mb-2' key={index}>{message}</p>)}
            </div>
        </div>
    </div>
  )
}
