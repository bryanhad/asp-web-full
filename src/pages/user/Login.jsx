import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import KeyIcon from '@mui/icons-material/Key'

export const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-[#762885] via-[#411b80] to-[#43076e] flex justify-center items-center py-16">
      <div className="h-[500px] w-[300px] bg-white md:h-[600px] md:w-[500px] rounded-xl relative">
        <div className="absolute top-0 bg-white translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full ">
          <AccountCircleIcon
            className="text-slate-800"
            sx={{ fontSize: '120px' }}
          />
        </div>
        <h1 className="mt-12 py-4 text-center font-bold text-4xl text-slate-800">
          Login
        </h1>
        <form className="mx-10">
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
            />
          </div>
          <div className="ml-auto mt-2 text-slate-600 max-w-max cursor-pointer p-2">
            <p>Forgot password?</p>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="w-[75%] h-[50px] rounded-full bg-gradient-to-bl from-[#762885] via-[#631b80] to-[#43076e] font-semibold text-white "
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%] flex">
          <p className='font-[300] text-slate-500'>Or go back to <span className='font-bold cursor-pointer'>Home</span></p>
        </div>
      </div>
    </div>
  )
}
