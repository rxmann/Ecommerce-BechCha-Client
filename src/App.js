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
import VerifyOTP from "./Pages/VerifyOTPpage"
import Topbar from "./AdminComponents/CommonLayouts/Topbar"
import Sidebar from "./AdminComponents/CommonLayouts/Sidebar"
import AdminHome from "./AdminPages/AdminHome"
import UsersTab from "./AdminPages/UsersTab"
import ProductsTab from "./AdminPages/ProductsTab"
import UserDetails from "./AdminComponents/User/UserDetails"
import UserRegister from "./AdminComponents/User/UserRegister"
import ProductDetails from "./AdminComponents/Product/ProductDetails"
import ProductAdd from "./AdminComponents/Product/ProductAdd"
import CartPage from "./Components/Carts/CartPage"
import ProfileDisplay from "./Components/ProfilePages/ProfileDisplay"
import Orders from "./Components/ProfilePages/Orders"


const Wrapper = styled.div`
  background-color: #f5f7f8;
`
const Contents = styled.div`
  display: flex;
  font-family: 'Nunito', sans-serif;
  padding-right: 50px;
  background-color: #f5f7f8;
`

const ProfileWrapper = styled.div`
  padding: 10px 50px;
`

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


  const ProfileLayout = () => {
    return (
      <Wrapper>
        <ProfilePage />
        <ProfileWrapper>
          <Outlet />
        </ProfileWrapper>
      </Wrapper>
    )
  }


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
          element: <ProfileLayout />,
          children: [
            {
              path: "/profile/me",
              element: <ProfileDisplay />
            },
            {
              path: "/profile/cart/me",
              element: <CartPage />
            },
            {
              path: "/profile/orders/me",
              element: <Orders />
            },
          ]
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
          element: <ProductAdd />
        }
      ]
    },
    {
      path: "/login",
      element: (<LoginPage />)
    },
    {
      path: "/register",
      element: (<RegisterPage />) 
    },
    {
      path: "/verify-registration",
      element: (<VerifyOTP />)
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
