import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Footer from "./Components/Layout/Footer"
import ShowProductsPage from "./Pages/ShowProductsPage"
import EmptyView from "./Components/EmptyView/EmptyView"
import SingleProductPage from "./Pages/SingleProductPage"
import styled from "styled-components"
import { ToastContainer } from 'react-toastify';
import ProfilePage from "./Pages/ProfilePage"
import VerifyOTP from "./Components/VerifyOTPpage"
import Topbar from "./AdminComponents/CommonLayouts/Topbar"
import Sidebar from "./AdminComponents/CommonLayouts/Sidebar"
import AdminHome from "./AdminPages/AdminHome"
import UserList from "./AdminPages/UsersTab"


const Wrapper = styled.div`
`
const Contents = styled.div`
  display: flex;
  font-family: 'Nunito', sans-serif;
  padding: 0px 50px;
`

// COLORS
// #F5F7F8
// #0171B6
// #FFFFFF
// #333333
// #aaaaaa
// #0076CE
// box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;


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

  const AdminLayout = () => {
    return (
      <Wrapper >
        <Topbar />
        <Contents>
          <Sidebar />
          <Outlet />
        </Contents>
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
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <AdminHome />
        },
        {
          path: "/admin/userslist",
          element: <UserList />
        }
      ]
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
