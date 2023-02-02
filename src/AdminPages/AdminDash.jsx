import Sidebar from '../AdminComponents/Sidebar'
import styled from "styled-components"
import AdminHome from './AdminHome'
import Topbar from '../AdminComponents/Topbar'

const Container = styled.div`
  display: flex;
  font-family: 'Nunito', sans-serif;
`



const AdminDash = () => {
  return (
   <>
    <Topbar />
    <Container>
      <Sidebar />
      <AdminHome />
    </Container>
   </>
  )
}

export default AdminDash