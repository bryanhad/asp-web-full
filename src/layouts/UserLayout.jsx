import { Outlet } from "react-router-dom"
import { UserNavbar } from "../components/UserNavbar"
import { UserSidePanel } from "../components/UserSidePanel"
import { UserFooter } from "../components/UserFooter"

export const UserLayout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <div className="w-full max-h-max">
        <UserNavbar/>
      </div>
      <div className="flex-[10] flex">
        <div className="md:flex-[2]">
          <UserSidePanel/>
        </div>
        <div className="flex-[7]">
          <Outlet/>
        </div>
      </div>
      <div className="w-full max-h-max">
        <UserFooter/>
      </div>
    </div>
  )
}
