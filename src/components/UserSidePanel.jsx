import React, { useContext } from 'react'
import { sideMenus, ICON, ThemeColor } from '../data/NavSource'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import GridViewIcon from '@mui/icons-material/GridView'
import GroupIcon from '@mui/icons-material/Group'
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export const UserSidePanel = () => {
  const liClass = 'mb-5'
  const titleClass = 'font-[300] text-slate-300 text-[13px] lg:text-[16px]'
  const navClass = 'flex items-center p-2 hover:bg-white/20'
  const spanClass = 'text-slate-100 lg:text-[20px]'

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogout = () => {
    if (confirm('Are you sure?')) {
      signOut(auth).then(() => {
        alert('Logout Successful!')
        dispatch({type:'LOGOUT'})
        navigate('/login')
      }).catch((error) => {
        alert(error)
      })
    } else {
      return
    }
  }

  return (
    <div className="hidden md:flex flex-col px-6 py-4 bg-secondary flex-[2] h-full">
      <ul>
        <li className={liClass}>
          <h5 className={titleClass}>DASHBOARD</h5>
          <NavLink end to="/user" className={navClass}>
            <ICON>
              <GridViewIcon />
            </ICON>
            <span className={spanClass}>Home</span>
          </NavLink>
        </li>
        <li className={liClass}>
          <h5 className={titleClass}>MANAGE</h5>
          <NavLink to="members" className={navClass}>
            <ICON>
              <GroupIcon />
            </ICON>
            <span className={spanClass}>Members</span>
          </NavLink>
          <NavLink to="blogs" className={navClass}>
            <ICON>
              <VerticalSplitIcon />
            </ICON>
            <span className={spanClass}>Blogs</span>
          </NavLink>
        </li>
        <li className={liClass}>
          <h5 className={titleClass}>USER</h5>
          <NavLink to="profile" className={navClass}>
            <ICON>
              <AccountCircleIcon />
            </ICON>
            <span className={spanClass}>Profile</span>
          </NavLink>
          <div onClick={handleLogout} className={navClass}>
            <ICON>
              <LogoutIcon />
            </ICON>
            <span className={spanClass}>Logout</span>
          </div>
        </li>
      </ul>

      {/* Theme Color */}
      <div className="flex my-8">
        <ThemeColor color="bg-slate-100" />
        <ThemeColor color="bg-slate-700" />
      </div>
    </div>
  )
}
