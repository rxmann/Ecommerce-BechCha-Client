import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import {createBrowserRouter, RouterProvider} from "react-router-dom"



// COLORS
// #F5F7F8
// #0171B6
// #FFFFFF


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/",
      element: <Homepage />
    }
    
  ])




  return (
    <RouterProvider router={router} />
  )
}

export default App
