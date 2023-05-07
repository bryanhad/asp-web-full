import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import KeyIcon from '@mui/icons-material/Key'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useContext, useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const Login = () => {
  const [error, setError] = useState(false)
  const [errorStyle, setErrorStyle] = useState('red')
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        dispatch({ type: 'LOGIN', payload: user })

        // setSuccess is for the 'login successful' ui to show up
        setSuccess(true)
        setTimeout(() => {
          navigate('/user')
        }, 800)
      })
      .catch((error) => {
        setError(true)
        setErrorStyle('red joget')
        setTimeout(() => {
          setErrorStyle('red')
        }, 330)
      })
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-[#762885] via-[#411b80] to-[#43076e] flex justify-center items-center py-16">
      <div
        className={`h-[530px] w-[300px] bg-white md:h-[600px] md:w-[500px] rounded-xl relative`}
      >
        <div className="absolute top-0 bg-white translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full ">
          <AccountCircleIcon
            className="text-slate-800"
            sx={{ fontSize: '120px' }}
          />
        </div>
        <h1 className="mt-12 py-4 text-center font-bold text-4xl text-slate-800">
          Login
        </h1>
        {!success && (
          <form onSubmit={handleLogin} className="mx-10">
            <label
              htmlFor="email"
              className="font-semibold text-slate-400 cursor-pointer"
            >
              Email
            </label>
            <div
              className={`flex items-center border-b-2 border-b-slate-300 text-slate-400 py-2 mb-6 ${
                error && errorStyle
              }`}
            >
              <label htmlFor="email" className="cursor-pointer p-2">
                <EmailIcon sx={{ fontSize: '25px' }} />
              </label>
              <input
                type="email"
                placeholder="Type your email..."
                id="email"
                className="bg-transparent outline-none text-slate-700 py-2 px-1 w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label
              htmlFor="password"
              className="font-semibold text-slate-400 cursor-pointer"
            >
              Password
            </label>
            <div
              className={`flex items-center border-b-2 border-b-slate-300 text-slate-400 py-2 ${
                error && errorStyle
              }`}
            >
              <label htmlFor="password" className="cursor-pointer p-2 ">
                <KeyIcon sx={{ fontSize: '25px' }} />
              </label>
              <input
                type="password"
                placeholder="Type your email..."
                id="password"
                className="bg-transparent outline-none text-slate-700 py-2 px-1 w-full"
                onChange={(e) => setPassword(e.target.value)}
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
        )}
        {success && (
          <div className="h-[60%] w-full flex justify-center items-center">
            <div className="mb-12 w-[70%] text-green-600 flex flex-col items-center">
              <CheckCircleIcon sx={{ width: '50%', height: '50%' }} />
              <h1 className="mt-6 font-bold text-xl">Login successful!</h1>
            </div>
          </div>
        )}
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%] flex">
          <p className="font-[300] text-slate-500">
            Or go back to
            <Link className="font-bold cursor-pointer ml-1" to="/">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
