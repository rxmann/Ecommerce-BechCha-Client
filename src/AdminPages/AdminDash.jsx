import Sidebar from '../AdminComponents/Sidebar/Sidebar'
import Navbar from '../Components/SubComponents/Navbar'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Others = styled.div`
  flex: 4;
`

const AdminDash = () => {
  return (
   <>
    <Navbar />
    <Container>
      <Sidebar />
      <Others>
        others
      </Others>
    </Container>
   </>
  )
}

export default AdminDash