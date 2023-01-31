import Sidebar from '../AdminComponents/Sidebar/Sidebar'
import Navbar from '../Components/Layout/Navbar'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`
const RightDisplay = styled.div`
  flex: 5;
`



const AdminDash = () => {
  return (
   <>
    <Navbar />
    <Container>
      <Sidebar />
      <RightDisplay >

      </RightDisplay>

    </Container>
   </>
  )
}

export default AdminDash