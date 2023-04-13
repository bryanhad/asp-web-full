import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserRoutes } from "./Routes/UserRoutes"
import { Login } from "./pages/user/Login"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user/*" element={<UserRoutes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
