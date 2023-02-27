import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom"

// User
import Navbar from "./Components/User/Layout/Navbar"
import Footer from "./Components/User/Layout/Footer"
import Homepage from "./Pages/User/Homepage"
import ShowProductsPage from "./Pages/User/ShowProductsPage"
import ProductPage from "./Pages/User/ProductPage"
import ProfilePage from "./Pages/User/ProfilePage"
import EmptyView from "./Components/User/EmptyView/EmptyView"
// Auth
import LoginPage from "./Pages/Auth/LoginPage"
import RegisterPage from "./Pages/Auth/RegisterPage"
import VerifyOTP from "./Pages/Auth/VerifyOTPpage"
// Admin
import Topbar from "./Components/AdminComponents/CommonLayouts/Topbar"
import Sidebar from "./Components/AdminComponents/CommonLayouts//Sidebar"
import AdminHome from "./Pages/AdminPages/AdminHome"
import UsersTab from "./Pages/AdminPages/UsersTab"
import ProductsTab from "./Pages/AdminPages/ProductsTab"

import UserDetails from "./Components/AdminComponents/User/UserDetails"
import UserRegister from "./Components/AdminComponents/User/UserRegister"
import ProductDetails from "./Components/AdminComponents/Product/ProductDetails"
import ProductAdd from "./Components/AdminComponents/Product/ProductAdd"

import styled from "styled-components"
import { ToastContainer } from 'react-toastify';








import CartPage from "./Components/User/Carts/CartPage"
import ProfileDisplay from "./Components/User/ProfilePages/ProfileDisplay"
import Orders from "./Components/User/ProfilePages/Orders"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import CategoriesTab from "./Pages/AdminPages/CategoriesTab"
import CategoryForm from "./Components/AdminComponents/Category/CategoryForm"
import CategoryAdd from "./Components/AdminComponents/Category/CategoryAdd"
import CategoryDisplay from "./Components/AdminComponents/Category/CategoryDisplay"


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
    const navigate = useNavigate();
    const { isSignedIn, currentUser  } = useSelector(state => state.user)

    useEffect(() => {
      const checkLogin = () => {
        if (!isSignedIn || !currentUser.isAdmin) {
          navigate("/login");
        }
      }
      checkLogin();
    }, [isSignedIn, navigate]);

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
    const navigate = useNavigate();
    const { isSignedIn  } = useSelector(state => state.user)

    useEffect(() => {
      const checkLogin = () => {
        if (!isSignedIn) {
          navigate("/login");
        }
      }
      checkLogin();
    }, [isSignedIn, navigate]);

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
          element: <ProductPage />,
        },
        {
          path: "/profile",
          element: <ProfileLayout />,
          children: [
            {
              path: "/profile/:id",
              element: <ProfileDisplay />
            },
            {
              path: "/profile/cart/:id",
              element: <CartPage />
            },
            {
              path: "/profile/orders/:id",
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
          path: "/admin/users",
          element: <UsersTab />
        },
        {
          path: "/admin/products",
          element: <ProductsTab />
        },
        {
          path: "/admin/categories",
          element: <CategoriesTab />
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
        },
        {
          path: "/admin/category/:id",
          element: <CategoryDisplay />
        },
        {
          path: "/admin/category/add",
          element: <CategoryAdd />
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
