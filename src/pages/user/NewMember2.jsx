import React, { useEffect, useState } from 'react'
import NoPic from '../../assets/no-image-icon.jpg'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { TitlePage } from '../../components/TitlePage'

import { auth, db, storage } from '../../firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

export const NewMember2 = () => {
  const [file, setFile] = useState('')
  const [values, setValues] = useState({
    fullname: '',
    profilePic: '',
    username: '',
    birthday: '',
    address: '',
    phone: '',
    email: '',
    position: '',
    isAdmin: false,
    password: '',
    confirmPassword: '',
  })
  const [percentage, setPercentage] = useState(null)

  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime() + file.name
      // console.log(name)
      const storageRef = ref(storage, file.name)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          setPercentage(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        (error) => {
          alert(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setValues({ ...values, profilePic: downloadURL })
            // console.log('File available at', downloadURL)
          })
        }
      )
    }

    file && uploadFile()
  }, [file])

  const divClass = 'flex flex-col mb-4'

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      await setDoc(doc(db, 'users', res.user.uid), {
        ...values,
        timeStamp: serverTimestamp(),
      })
    } catch (error) {
      alert(error)
    }
    alert('Form has been successfuly submitted!')
  }

  // console.log(values)

  return (
    <div className="w-full h-full bg-slate-100 p-4">
      <TitlePage>Add Member</TitlePage>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-6 rounded-md shadow-md mb-6 lg:p-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-start items-center">
          <div className="mb-6 w-full flex flex-col lg:flex-[1] gap-6 items-center">
            <div className='w-[70%] max-w-[250px] rounded-full overflow-hidden after:content-[""] after:block after:pb-[100%] relative'>
              {values.profilePic === '' ? (
                <img className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-full object-cover" src={NoPic} alt="" />
              ) : (
                <img
                  className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-full object-cover"
                  src={values.profilePic}
                  alt=""
                />
              )}
            </div>

            <label
              className="py-2 px-6 cursor-pointer rounded-full bg-sky-400 text-white"
              htmlFor="file"
            >
              Choose Image
              <DriveFolderUploadIcon className="ml-2" />
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="w-[80%] lg:flex-[2]">
            <div className={divClass}>
              <Label id="fullname" label="Full Name" />
              <Input
                id="fullname"
                name="fullname"
                placeholder="Insert full name"
                type="text"
                handleChange={handleChange}
                isRequired={true}
              />
            </div>
            <div className={divClass}>
              <Label id="userName" label="User Name ( Display Name )" />
              <Input
                id="username"
                name="username"
                placeholder="Insert user name"
                type="text"
                handleChange={handleChange}
                isRequired={true}
              />
            </div>
            <div className={divClass}>
              <Label id="birthday" label="Birthday" />
              <Input
                id="birthday"
                name="birthday"
                placeholder="Insert birthday"
                type="date"
                handleChange={handleChange}
              />
            </div>
            <div className={divClass}>
              <Label id="address" label="Address" />
              <textarea
                className="outline-none font-[400] bg-transparent text-slate-400 border-b-2 border-slate-300 placeholder:text-slate-300 p-2"
                name="address"
                id="address"
                placeholder="Insert Address"
                cols="30"
                rows="5"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={divClass}>
              <Label id="phone" label="Phone Number" />
              <Input
                id="phone"
                name="phone"
                placeholder="Insert phone number"
                type="number"
                handleChange={handleChange}
              />
            </div>
            <div className={divClass}>
              <Label id="email" label="Email" />
              <Input
                claz="input"
                id="email"
                name="email"
                placeholder="Insert email"
                type="email"
                handleChange={handleChange}
                errorMessage="Email have to be valid!"
                isRequired={true}
              />
            </div>
            <div className={divClass}>
              <Label id="position" label="Position" />
              <Input
                id="position"
                name="position"
                placeholder="e.g. Junior Associate"
                type="text"
                handleChange={handleChange}
              />
            </div>
            <div className={divClass}>
              <Label label="Role" />
              <div className="flex">
                <div className="mr-3">
                  <input
                  className='cursor-pointer'
                    onChange={handleChange}
                    name="isAdmin"
                    defaultChecked
                    type="radio"
                    value={false}
                    id="user"
                  />
                  <label className="ml-1 cursor-pointer" htmlFor="user">
                    User
                  </label>
                </div>
                <div>
                  <input
                  className='cursor-pointer font-bold'
                    onChange={handleChange}
                    name="isAdmin"
                    type="radio"
                    value={true}
                    id="admin"
                  />
                  <label className="ml-1 cursor-pointer" htmlFor="admin">
                    Admin
                  </label>
                </div>
              </div>
            </div>
            <div className={divClass}>
              <Label id="password" label="Password" />
              <Input
                claz="input"
                id="password"
                name="password"
                type="password"
                placeholder="Insert Password"
                handleChange={handleChange}
                errorMessage="Password should be 8-20 characters, include at least 1 letter and 1 number, and cannot include special characters!!"
                isRequired={true}
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z0-9]{8,20}$"
              />
            </div>
            <div className={divClass}>
              <Label id="confirmPassword" label="Confirm Password" />
              <Input
                claz="input"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                handleChange={handleChange}
                errorMessage="Password don't match!"
                isRequired={true}
                pattern={values.password}
              />
            </div>
          </div>
        </div>
        <div className="w-[70%] max-w-[450px] mx-auto">
          <button
            disabled={percentage !== null && percentage < 100}
            type="submit"
            className="w-full py-4 rounded-md bg-green-400 disabled:bg-green-400/40 disabled:cursor-not-allowed font-[600] tracking-wider text-white mt-4"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

const Input = ({
  id,
  value,
  name,
  placeholder,
  type,
  handleChange,
  errorMessage,
  claz,
  isRequired,
  pattern,
}) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    // setFocused here means leave*
    setFocused(true)
  }

  return (
    <>
      <input
        className={`outline-none font-[500] bg-transparent text-slate-600 border-b-2 border-slate-300 placeholder:text-slate-300 p-2 ${claz}`}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        required={isRequired}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="hidden text-[12px] p-[3px] text-[crimson] input-error">
        {errorMessage}
      </span>
    </>
  )
}

const Label = ({ id, label, span }) => {
  return (
    <label className="text-slate-400 mb-1" htmlFor={id}>
      {label}
    </label>
  )
}
