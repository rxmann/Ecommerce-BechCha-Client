import styled from "styled-components"

const Card = styled.div`
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    padding: 20px;
`

const ProfileDisplay = () => {
    return (
        <Card>
           <h2>profile</h2>
           <h2>Username</h2>
           <h2>Email</h2>
           <h2>Address</h2>
           <h2>Phone Number</h2>

        </Card>
    )
}

export default ProfileDisplay