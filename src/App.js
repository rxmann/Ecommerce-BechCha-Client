import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AddCategory from "./Pages/AddCategory"



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
    },
    {
      path: "/addcategory",
      element: <AddCategory />
    }
    
  ])




  return (
    <RouterProvider router={router} />
  )
}

export default App
