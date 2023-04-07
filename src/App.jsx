import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserLayout } from "./layouts/UserLayout"
import { UserHome } from "./pages/user/UserHome"
import { PageNotFound } from "./pages/PageNotFound"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<UserLayout />} >
            <Route index element={<UserHome /> }/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
