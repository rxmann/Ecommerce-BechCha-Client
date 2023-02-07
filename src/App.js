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
import UsersTab from "./AdminPages/UsersTab"
import ProductsTab from "./AdminPages/ProductsTab"
import UserDetails from "./AdminComponents/User/UserDetails"
import UserRegister from "./AdminComponents/User/UserRegister"
import ProductDetails from "./AdminComponents/Product/ProductDetails"


const Wrapper = styled.div`
`
const Contents = styled.div`
  display: flex;
  font-family: 'Nunito', sans-serif;
  padding-right: 50px;
  background-color: #f5f7f8;
`

// COLORS
// #F5F7F8
// #0171B6
// #FFFFFF
// #333333
// #aaaaaa
// #0076CE
// light
// box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
// dense
// box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; 


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
          path: "/admin/users/list",
          element: <UsersTab />
        },
        {
          path: "/admin/products/list",
          element: <ProductsTab />
        },
        {
          path: "/admin/user/:id",
          element: <UserDetails />
        },
        {
          path: "/admin/user/register",
          element: <UserRegister />
        },
        {
          path: "/admin/product/:id",
          element: <ProductDetails />
        },
        {
          path: "/admin/product/add",
          element: <UserRegister />
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
      path: "/verify-registration/:id",
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
