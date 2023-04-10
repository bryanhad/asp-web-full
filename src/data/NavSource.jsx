import GridViewIcon from '@mui/icons-material/GridView'
import GroupIcon from '@mui/icons-material/Group'
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

export const sideMenus = [
  {
    title: 'DASHBOARD',
    links: [{ icon: <GridViewIcon />, path: '/user', name: 'Home' }],
  },
  {
    title: 'MANAGE',
    links: [
      { icon: <GroupIcon />, path: 'members', name: 'Users' },
      { icon: <VerticalSplitIcon />, path: 'blogs', name: 'Blogs' },
    ],
  },
  {
    title: 'USER',
    links: [
      { icon: <AccountCircleIcon />, path: 'profile', name: 'Profile' },
      { icon: <LogoutIcon />, path: '/login', name: 'Logout' },
    ],
  },
]

export const user = {
  role: 'admin',
  img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80',
  name: 'Erwin',
}

export const ICON = ({ children }) => {
  return <div className="text-asp-yellow mr-2">{children}</div>
}

export const ThemeColor = ({ color }) => {
  return <div className={`w-[25px] h-[25px] border rounded-md ${color} mr-4 cursor-pointer`}></div>
}
