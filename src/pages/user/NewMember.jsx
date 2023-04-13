import NoPic from '../../assets/no-image-icon.jpg'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const divClass = 'flex flex-col w-[85%]'
const labelClass = 'text-slate-400 ml-1 mb-1'
const inputClass =
  'outline-none font-[400] text-slate-400 border-b-2 border-slate-300 placeholder:text-slate-300 px-1'

export const NewMember = () => {
  return (
    <div className="w-full h-full bg-slate-100 p-4">
      <div className="bg-white shadow-md rounded-md p-4 text-slate-300 font-semibold mb-4">
        <h1>Add New User</h1>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 text-slate-300 font-semibold flex flex-col items-center md:flex-row md:items-start md:p-6">
        <div className="flex flex-col items-center lg:flex-[1]">
          <img className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] rounded-full" src={NoPic} alt="" />
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
        <form className="mt-6 md:mt-0 w-full flex flex-col gap-4 items-center lg:flex-[2]">
          <div className={divClass}>
            <label htmlFor="fullname" className={labelClass}>
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="John Doe"
              className={inputClass}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="username" className={labelClass}>
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="John_D"
              className={inputClass}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="birthday" className={labelClass}>
              Birthday
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker showDaysOutsideCurrentMonth format='DD / MM / YYYY'/>
            </LocalizationProvider>
          </div>
          <div className={divClass}>
            <label htmlFor="address" className={labelClass}>
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Jl.Duren no.12, Jakarta Barat"
              className={inputClass}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder="085284869985"
              className={inputClass}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="JodnTheDoe@gmail.com"
              className={inputClass}
            />
          </div>
          <div className={divClass}>
            <label htmlFor="position" className={labelClass}>
              Position
            </label>
            <input
              type="text"
              id="position"
              placeholder="Junior Asssociate"
              className={inputClass}
            />
          </div>
          <div className={divClass}>
            <FormControl>
              <FormLabel
                sx={{
                  marginLeft: '0.25rem',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#94a3b8',
                }}
                id="demo-row-radio-buttons-group-label"
              >
                Role
              </FormLabel>
              <RadioGroup
                sx={{ marginLeft: '0.25rem' }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  sx={{ color: '#94a3b8' }}
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  sx={{ color: '#94a3b8' }}
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <button className='py-2 px-16 rounded-md bg-asp-yellow text-white' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}
