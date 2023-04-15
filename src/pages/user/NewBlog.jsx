import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { useState } from 'react'
import { TocTwoTone } from '@mui/icons-material'
import { TitlePage } from '../../components/TitlePage'

export const NewBlog = () => {

  const divClass = 'mt-4 flex flex-col max-w-[90%] mx-auto'
  const labelClass = 'text-slate-400 ml-1 mb-1 font-[500]'
  const inputClass = 'outline-none font-[400] text-slate-500 border-b-2 border-slate-300 placeholder:text-slate-300 px-1'

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState('')
  return (
    <div className="w-full h-full bg-slate-100 p-4">
      <TitlePage>
        Add New Blog
      </TitlePage>
      <div className="bg-white shadow-md rounded-md p-4 lg:flex">
        {/* upload image */}
        <div className="flex flex-col items-center lg:flex-[1]">
          <div className='max-w-[400px] border-2 p-2 rounded-md'>
            <ImageNotSupportedIcon
              sx={{ width: '100%', color: '#94a3b8', height: '100%' }}
            />
          </div>
          <p className="mt-2 font-[500] text-slate-500 text-center">
            Upload Thumbnail:
            <label htmlFor="file" className=" p-2 cursor-pointer text-slate-400">
              <DriveFolderUploadIcon />
            </label>
            <input className="hidden" type="file" id="file" />
          </p>
        </div>

        {/* form */}
        <form className='lg:flex-[2]'>
          <div className={divClass}>
            <label htmlFor="title" className={labelClass} >Title</label>
            <input type="text" placeholder="Insert your title" id="title" className={inputClass} onChange={(e) => {setTitle(e.target.value)}}/>
          </div>
          <div className={divClass}>
            <label htmlFor="desc" className={labelClass} >Description</label>
            <textarea placeholder="Write your blog!" rows={12} id="desc" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500' onChange={(e) => {setText(e.target.value)}}/>
          </div>
          <div className='mt-10 max-w-max mx-auto'>
            <button
              className="py-2 px-16 rounded-md bg-asp-yellow text-white "
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
