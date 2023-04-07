import React from 'react'
import { sideMenus, ICON, ThemeColor } from '../data/NavSource'
import { Link, NavLink } from 'react-router-dom'

export const UserSidePanel = () => {
  return (
    <div className="hidden md:flex flex-col px-6 py-4 bg-secondary flex-[2]">
      <ul>
        {sideMenus.map((menu) => (
          <li key={menu.title} className="mb-5">
            <h5 className="font-[300] text-slate-300 text-[13px] lg:text-[16px]">
              {menu.title}
            </h5>
            {menu.links.map((link) => (
              <div key={link.name} className='hover:bg-white/20'>
                {link.name === 'Home' ? (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="flex items-center p-2"
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
                    className="flex items-center p-2"
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
    </div>
  )
}
