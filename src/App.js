import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProductsPage from "./Pages/ProductsPage"
import EmptyView from "./Components/EmptyView/EmptyView"
import SingleProductPage from "./Pages/SingleProductPage"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

// COLORS
// #F5F7F8
// #0171B6
// #FFFFFF
// #333333
// #aaaaaa


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
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/products/:id",
          element: <ProductsPage />,
        },
        {
          path: "/product/:id",
          element: <SingleProductPage />,
        },
      ],
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
      path: "*",
      element: <EmptyView />
    }
    
  ])




  return (
    <RouterProvider router={router} />
  )
}

export default App
