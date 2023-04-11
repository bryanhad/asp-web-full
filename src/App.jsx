import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserLayout } from "./layouts/UserLayout"
import { UserHome } from "./pages/user/UserHome"
import { DataList } from "./pages/user/DataList"
import { SingleMember } from "./pages/user/SingleMember"
import { New } from "./pages/user/New"
import { PageNotFound } from "./pages/PageNotFound"
import { Profile } from "./pages/user/Profile"
import { userColumns, users } from "./data/dummyUsers"
import { blogColumns, blogs } from "./data/blogs"
import { SingleBlog } from "./pages/user/SingleBlog"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<UserLayout />} >
            <Route index element={<UserHome /> }/>
            <Route path="members">
              <Route index element={<DataList title='ASP MEMBERS' data={users} columns={userColumns}/>}/>
              <Route path=":userId" element={<SingleMember/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="blogs">
              <Route index element={<DataList title='ASP BLOGS' data={blogs} columns={blogColumns}/>}/>
              <Route path=":blogId" element={<SingleBlog/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="profile" element={<Profile/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
