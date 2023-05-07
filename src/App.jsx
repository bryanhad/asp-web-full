import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { UserRoutes } from './Routes/UserRoutes'
import { Login } from './pages/user/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

import { DatasContext } from "./context/DatasContext"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

function App() {
  const [datas, setDatas] = useState([])
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  useEffect(() => {
    const fetchData = async () => {
      
      let list = []
      try{
        const querySnapshot = await getDocs(collection(db, 'users'))
        querySnapshot.forEach((doc) => {
          list.push({...doc.data(), id: doc.id})
        })
        setDatas(list)
      } catch(error) {
        alert(error)
      }
    }
    fetchData()
  }, [])

  console.log(datas)

  // console.log(currentUser)
  return (
    <>
    <DatasContext.Provider value={{datas, setDatas}}>

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
    </DatasContext.Provider>

    </>
  )
}

export default App
