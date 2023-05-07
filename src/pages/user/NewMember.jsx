import NoPic from '../../assets/no-image-icon.jpg'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { TitlePage } from '../../components/TitlePage'

import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../../firebase'
import { useState } from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers'

export const NewMember = () => {
  const [data, setData] = useState({})
  const [dateValue, setDateValue] = useState(null)

  const divClass = 'flex flex-col w-[85%]'
  const labelClass = 'text-slate-400 ml-1 mb-1'
  const inputClass =
    'outline-none font-[400] text-slate-400 border-b-2 border-slate-300 placeholder:text-slate-300 px-1'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await addDoc(collection(db, 'cities'), {
        name: 'bruh',
        state: 'CA',
        country: 'USA',
        timeStamp: serverTimestamp(),
      })
    } catch (error) {
      console.log(error)
    }
    console.log(res.id)
  }

  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  const handleRadio = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'user') {
      setData({ ...data, isAdmin:false})
    } else {
      setData({...data, isAdmin:true})
    }
  }

  console.log(data)
  console.log(dateValue)

  return (
    <div className="w-full h-full bg-slate-100 p-4">
      <TitlePage>Add New User</TitlePage>
      <div className="bg-white shadow-md rounded-md p-4 text-slate-300 font-semibold flex flex-col items-center md:flex-row md:items-start md:p-6">
        <div className="flex flex-col items-center lg:flex-[1]">
          <img className="w-[35%] lg:w-[45%] rounded-full" src={NoPic} alt="" />
          <p className="mt-2 md:flex md:max-lg:flex-col md:items-center md:max-lg:whitespace-nowrap">
            Upload Image:
            <label
              htmlFor="file"
              className=" p-2 cursor-pointer text-slate-400"
            >
              <DriveFolderUploadIcon />
            </label>
            <input className="hidden" type="file" id="file" />
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-6 md:mt-0 w-full flex flex-col gap-4 items-center lg:flex-[2]"
        >
          <div className={divClass}>
            <label htmlFor="fullname" className={labelClass}>
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Insert full name"
              className={inputClass}
              onChange={handleInput}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="username" className={labelClass}>
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Insert username"
              className={inputClass}
              onChange={handleInput}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="birthday" className={labelClass}>
              Birthday
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker 
              value={dateValue}
              onChange={setDateValue}
              />
            </LocalizationProvider>
            {/* <input
              className="outline-[6px] bg-slate-400 rounded-md text-white p-2"
              type="date"
              id="birthday"
              onChange={handleInput}
            /> */}
          </div>
          <div className={divClass}>
            <label htmlFor="address" className={labelClass}>
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="e.g. Jl.Duren no.12, Jakarta Barat"
              className={inputClass}
              onChange={handleInput}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder="Insert phone number"
              className={inputClass}
              onChange={handleInput}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Insert email"
              className={inputClass}
              onChange={handleInput}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="position" className={labelClass}>
              Position
            </label>
            <input
              type="text"
              id="position"
              placeholder="e.g. Junior Asssociate"
              className={inputClass}
              onChange={handleInput}
            />
          </div>
          <div className={divClass}>
            <h1 className={labelClass}>Role</h1>
            <div className="ml-1 flex gap-2">
              <div>
                <input
                  className="mr-1"
                  type="radio"
                  name="role"
                  value="user"
                  id="user"
                  onChange={handleRadio}
                />
                <label htmlFor="user">User</label>
              </div>
              <div>
                <input
                  className="mr-1"
                  type="radio"
                  name="role"
                  value="admin"
                  id="admin"
                  onChange={handleRadio}
                />
                <label htmlFor="admin">Admin</label>
              </div>
            </div>
          </div>
          <button
            className="py-2 px-16 rounded-md bg-asp-yellow text-white"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}
