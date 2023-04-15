import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import KeyIcon from '@mui/icons-material/Key'
import { useContext, useState } from 'react'

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    dispatch({type:'LOGIN', payload:user})
    navigate('/user')
  })
  .catch((error) => {
    setError(true)
  });
  }


  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-[#762885] via-[#411b80] to-[#43076e] flex justify-center items-center py-16">
      <div className="h-[530px] w-[300px] bg-white md:h-[600px] md:w-[500px] rounded-xl relative">
        <div className="absolute top-0 bg-white translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full ">
          <AccountCircleIcon
            className="text-slate-800"
            sx={{ fontSize: '120px' }}
          />
        </div>
        <h1 className="mt-12 py-4 text-center font-bold text-4xl text-slate-800">
          Login
        </h1>
        <form onSubmit={handleLogin} className="mx-10">
          <label
            htmlFor="email"
            className="font-semibold text-slate-400 cursor-pointer"
          >
            Email
          </label>
          <div className="flex items-center border-b-2 border-b-slate-300 py-2 mb-6">
            <label
              htmlFor="email"
              className="cursor-pointer p-2 text-slate-400"
            >
              <EmailIcon sx={{ fontSize: '25px' }} />
            </label>
            <input
              type="email"
              placeholder="Type your email..."
              id="email"
              className="bg-transparent outline-none text-slate-700 py-2 px-1"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <label
            htmlFor="password"
            className="font-semibold text-slate-400 cursor-pointer"
          >
            Password
          </label>
          <div className="flex items-center border-b-2 border-b-slate-300 py-2">
            <label
              htmlFor="password"
              className="cursor-pointer p-2 text-slate-400"
            >
              <KeyIcon sx={{ fontSize: '25px' }} />
            </label>
            <input
              type="password"
              placeholder="Type your email..."
              id="password"
              className="bg-transparent outline-none text-slate-700 py-2 px-1"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="ml-auto mt-2 text-slate-600 max-w-max cursor-pointer p-2">
            <p>Forgot password?</p>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <button
              type="submit"
              className="w-[75%] h-[50px] rounded-full bg-gradient-to-bl from-[#762885] via-[#631b80] to-[#43076e] font-semibold text-white "
            >
              LOGIN
            </button>
            {error && (
              <p className="mt-4 text-[crimson]">Wrong email or password!</p>
            )}
          </div>
        </form>
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%] flex">
          <p className="font-[300] text-slate-500">
            Or go back to <span className="font-bold cursor-pointer">Home</span>
          </p>
        </div>
      </div>
    </div>
  )
}
