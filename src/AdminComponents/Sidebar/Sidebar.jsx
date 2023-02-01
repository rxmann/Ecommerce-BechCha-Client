import styled from "styled-components"
import { LineStyle, TrendingUp, Timeline } from "@mui/icons-material"
import "../support.css"

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 70px);
    position: sticky;
    top: 70px;
`

const SidebarWrapper = styled.div`
   padding: 20px;
   color: #555;
`

const SidebarMenu = styled.div`
    margin-bottom: 10px;
`

const SidebarTitle = styled.h3`
    font-size: 14px;
    color: #0171b6;
    margin-bottom: 10px;
`

const SidebarList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const SidebarListItem = styled.li`
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    align-items: center;


    &:hover {
        background-color: #e2f5ff;
    }
`


const Sidebar = () => {


    return (
        <Container>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle> Dashboard </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem className="menuActive">
                            <LineStyle className="iconMUI"/>  Home
                        </SidebarListItem>

                        <SidebarListItem>
                        <Timeline  className="iconMUI"/>  Analytics
                        </SidebarListItem>

                        <SidebarListItem>
                         <TrendingUp className="iconMUI" />  Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </Container>
    )
}

export default Sidebar