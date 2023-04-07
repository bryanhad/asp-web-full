import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@mui/icons-material/Menu'

import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { sideMenus, user, ThemeColor, ICON } from '../data/NavSource'
import { Link, NavLink } from 'react-router-dom'

export const UserNavbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="w-full bg-primary">
      <div className="mx-6 flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-slate-100">LOGO</h1>

        {/* Profile */}
        <div className="hidden md:flex items-center   ">
          <div className="relative">
            <SettingsIcon
              className="absolute left-0 translate-x-[-50%] top-0 medium text-asp-yellow"
              sx={{ fontSize: '15px' }}
            />
            <img
              className="h-[30px] w-[30px] rounded-full"
              src={user.img}
              alt={user.name}
            />
          </div>
          <h5 className="ml-2 font-[300] text-slate-100">{user.name}</h5>
        </div>

        {/* Burger */}
        <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <CloseIcon sx={{ fontSize: '30px' }} />
          ) : (
            <MenuIcon sx={{ fontSize: '30px' }} />
          )}
        </div>

        {/* Burger Menu */}
        <div
          className={`fixed md:hidden ${
            navOpen ? 'left-0' : 'left-[-100%]'
          } top-0 duration-500 ease-in-out  w-[60vw] h-screen bg-primary/80`}
        >
          <div className='p-4 bg-secondary mb-8'>
            <h1 className="text-2xl font-bold text-slate-100">LOGO</h1>
          </div>

          <div className='mx-4'>
            <ul>
              {sideMenus.map((menu) => (
                <li key={menu.title} className="mb-5">
                  <h5 className="font-[300] text-slate-300 text-[13px]">
                    {menu.title}
                  </h5>
                  {menu.links.map((link) => (
                <div key={link.name} className='hover:bg-white/20'>
                {link.name === 'Home' ? (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="flex items-center p-1"
                  >
                    <ICON>{link.icon}</ICON>
                    <span className="text-slate-100 lg:text-[20px]">
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <NavLink
                    to={link.path}
                    key={link.name}
                    className="flex items-center p-1"
                  >
                    <ICON>{link.icon}</ICON>
                    <span className="text-slate-100 lg:text-[20px]">
                      {link.name}
                    </span>
                  </NavLink>
                )}
              </div>
                  ))}
                </li>
              ))}
            </ul>

            {/* Theme Color */}
            <div className="flex my-8">
              <ThemeColor color="bg-slate-100" />
              <ThemeColor color="bg-slate-700" />
            </div>

            {/* Profile */}
            <div className="flex items-center py-2 px-2 rounded-lg bg-slate-200/30 max-w-max">
              <div className="relative">
                <SettingsIcon
                  className="absolute left-0 translate-x-[-50%] top-0 medium text-slate-600"
                  sx={{ fontSize: '15px' }}
                />
                <img
                  className="h-[30px] w-[30px] rounded-full"
                  src={user.img}
                  alt={user.name}
                />
              </div>
              <h5 className="ml-2 font-[300] text-slate-100">{user.name}</h5>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
