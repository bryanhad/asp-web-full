import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { UserRoutes } from './Routes/UserRoutes'
import { Login } from './pages/user/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  console.log(currentUser)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/user/*"
            element={
              <RequireAuth>
                <UserRoutes />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
