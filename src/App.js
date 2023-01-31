import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./Components/SubComponents/Navbar"
import Footer from "./Components/SubComponents/Footer"
import ShowProductsPage from "./Pages/ShowProductsPage"
import EmptyView from "./Components/EmptyView/EmptyView"
import SingleProductPage from "./Pages/SingleProductPage"
import styled from "styled-components"
import { ToastContainer } from 'react-toastify';
import ProfilePage from "./Pages/ProfilePage"
import VerifyOTP from "./Components/VerifyOTPpage"
import AdminDash from "./AdminPages/AdminDash"


const Wrapper = styled.div`
`

// COLORS
// #F5F7F8
// #0171B6
// #FFFFFF
// #333333
// #aaaaaa
// #0076CE


const App = () => {

  const Layout = () => {
    return (
      <Wrapper>
        <Navbar />
        <Outlet />
        <Footer />
      </Wrapper>
    );
  };


  const router = createBrowserRouter([
    {
      path: "*",
      element: <EmptyView />
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/products/:id",
          element: <ShowProductsPage />,
        },
        {
          path: "/product/:id",
          element: <SingleProductPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
      ],
    },
    {
      path: "admindash",
      element: <AdminDash />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/verify-registration",
      element: <VerifyOTP />
    }
    
  ])





  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />
    </>
  )
}

export default App
