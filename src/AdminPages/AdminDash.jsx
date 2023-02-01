import Sidebar from '../AdminComponents/Sidebar/Sidebar'
import Navbar from '../Components/Layout/Navbar'
import styled from "styled-components"
import AdminHome from './AdminHome'

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  font-family: 'Nunito', sans-serif;
`



const AdminDash = () => {
  return (
   <>
    <Navbar />
    <Container>
      <Sidebar />
      <AdminHome />
    </Container>
   </>
  )
}

export default AdminDash