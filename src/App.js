import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"


import {createBrowserRouter, RouterProvider, Route } from "react-router-dom"




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
      path: "/home",
      element: <Homepage />
    }
  ])




  return (
    <>
      <RouterProvider  router={router} />
    </>
  )
}

export default App
