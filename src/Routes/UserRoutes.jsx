import { Navigate, Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layouts/UserLayout'
import { UserHome } from '../pages/user/UserHome'
import { DataList } from '../pages/user/DataList'
import { SingleMember } from '../pages/user/SingleMember'
import { NewMember } from '../pages/user/NewMember'
import { PageNotFound } from '../pages/PageNotFound'
import { Profile } from '../pages/user/Profile'
import { userColumns, users } from '../data/dummyUsers'
import { blogColumns, blogs } from '../data/blogs'
import { SingleBlog } from '../pages/user/SingleBlog'
import { NewBlog } from '../pages/user/NewBlog'
import { NewMember2 } from '../pages/user/NewMember2'
import { useContext, useEffect } from 'react'
import { DatasContext } from '../context/DatasContext'
import { AuthContext } from '../context/AuthContext'

export const UserRoutes = () => {
  const { datas } = useContext(DatasContext)
  const { currentUser } = useContext(AuthContext)


  const LoggedInUserData = datas.find((data) => data.id === currentUser.uid)

  const HasToBeAdmin = ({ children }) => {
    return LoggedInUserData.isAdmin === 'true' ? children : <Navigate to="/user" />
  }

  console.log(LoggedInUserData)

  // console.log(currentUser)

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserHome />} />
        <Route path="members">
          <Route
            index
            element={
              <DataList
                title="ASP MEMBERS"
                data={datas}
                columns={userColumns}
              />
            }
          />
          <Route path=":userName" element={<SingleMember />} />
          <Route
            path="new"
            element={
              <HasToBeAdmin>
                <NewMember2 />
              </HasToBeAdmin>
            }
          />
        </Route>

        <Route path="blogs">
          <Route
            index
            element={
              <DataList title="ASP BLOGS" data={blogs} columns={blogColumns} />
            }
          />
          <Route path=":blogId" element={<SingleBlog />} />
          <Route path="new" element={<NewBlog />} />
        </Route>

        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
