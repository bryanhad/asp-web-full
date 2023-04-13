import { blogs } from '../../data/blogs'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useParams } from 'react-router-dom'

export const SingleBlog = () => {

  const {blogId} = useParams()

  return (
    <div className="w-full h-full bg-slate-100 p-4">
      <div className="bg-white w-full shadow-md rounded-md mb-4 lg:flex">
        <img
          className="max-lg:rounded-t-md lg:rounded-l-md w-full h-[300px] sm:h-[400px] lg:max-h-[700px] object-cover"
          src={blogs[blogId-1].image}
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center mb-2">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover"
              src={blogs[blogId-1].createdBy.image}
              alt=""
            />
            <p className="ml-2">{blogs[blogId-1].createdBy.name}</p>
            <p className="text-slate-400 text-[12px] ml-2">
              April 11, 2023 at 5:53:34 PM
            </p>
          </div>
          <h1 className="text-xl font-[500]">{blogs[blogId-1].title}</h1>
          <div className="h-[2px] w-[35%] my-2 rounded-r-lg bg-slate-300"></div>
          <p className='mb-2'>{blogs[blogId-1].desc}</p>
        </div>
      </div>

      <div className='mx-auto max-w-max flex items-center gap-6'>
        <button type='button' className='bg-white shadow-md max-w-max rounded-full cursor-pointer p-4'>
          <EditIcon className='text-slate-500 '/>
        </button>
        <button type='button' className='bg-white shadow-md max-w-max rounded-full cursor-pointer p-4'>
          <DeleteOutlineIcon className='text-red-500 '/>
        </button>
      </div>
    </div>
  )
}
