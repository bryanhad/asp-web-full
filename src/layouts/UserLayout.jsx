import { Outlet } from "react-router-dom"
import { UserNavbar } from "../components/UserNavbar"
import { UserSidePanel } from "../components/UserSidePanel"
import { UserFooter } from "../components/UserFooter"

export const UserLayout = () => {
  return (
    <div className="h-screen relative">
        <UserNavbar/>
        <div className="flex h-full">
            <UserSidePanel/>
            <main className="flex-[6] lg:flex-[8]">
                <Outlet/>
            </main>
        </div>
        <UserFooter/>
    </div>
  )
}
