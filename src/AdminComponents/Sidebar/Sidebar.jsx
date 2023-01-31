import styled from "styled-components"
import { LineStyle, TrendingUp, Timeline } from "@mui/icons-material"
import "../support.css"

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 70px);
    position: sticky;
    top: 70px;
    display: flex;
    background-color: #f5f7f8;
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
`

const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`

const SidebarListItem = styled.li`
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 10px;
    display: flex;
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
                            <LineStyle fontSize="small" /> Home
                        </SidebarListItem>

                        <SidebarListItem>
                            <Timeline fontSize="small" /> Analytics
                        </SidebarListItem>

                        <SidebarListItem>
                            <TrendingUp fontSize="small" /> Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle> User </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem className="menuActive">
                            <LineStyle fontSize="small" /> Home
                        </SidebarListItem>

                        <SidebarListItem>
                            <Timeline fontSize="small" /> Analytics
                        </SidebarListItem>

                        <SidebarListItem>
                            <TrendingUp fontSize="small" /> Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle> Product </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem className="menuActive">
                            <LineStyle fontSize="small" /> Home
                        </SidebarListItem>

                        <SidebarListItem>
                            <Timeline fontSize="small" /> Analytics
                        </SidebarListItem>

                        <SidebarListItem>
                            <TrendingUp fontSize="small" /> Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </Container>
    )
}

export default Sidebar