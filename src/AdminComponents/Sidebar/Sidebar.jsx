import styled from "styled-components"
import {  PersonOutline, CreditCard, Store, SettingsApplications, Dashboard, LocalShipping, Category, AccountCircleOutlined, ExitToApp, NotificationsNone } from "@mui/icons-material"
import "../support.css"
import { useState } from "react"

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 70px);
    max-width: 250px;
    position: sticky;
    top: 70px;
    border-right: 0.5px solid #f5f7f8;
`

const SidebarWrapper = styled.div`
   padding: 20px;
   color: #555;
`

const SidebarMenu = styled.div`
    margin-bottom: 10px;
`

const SidebarTitle = styled.h3`
    font-size: 10px;
    font-weight: bold;
    color: #999;
    margin: 15px 0px 10px 0px;
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
    font-size: 14px;
    align-items: center;
    color: #0171b6;


    &:hover {
        background-color: #e2f5ff;
        color: #333333;
    }
`


const Sidebar = () => {

    const [selected, setSelected] = useState("");

    const data = [
        {
            title: "MAIN",
            options: [{
                name: "Dashboard",
                icon: (<Dashboard className="iconMUI" />),
                selected: selected
            }],
        },
        {
            title: "CONTROLS",
            options: [{
                name: "Users",
                icon: (<PersonOutline className="iconMUI" />),
                selected: selected
            }],
        },
        {
            title: "PRODUCTS",
            options: [{
                name: "Products",
                icon: (<Store  className="iconMUI"/>),
                selected: selected
            }, {
                name: "Categories",
                icon: (<Category  className="iconMUI"/>),
                selected: selected
            }],
        },
        {
            title: "SERVICES",
            options: [{
                name: "Orders",
                icon: (<CreditCard className="iconMUI"/>),
                selected: selected
            },
            {
                name: "Delivery",
                icon: (<LocalShipping  className="iconMUI"/>),
                selected: selected
            },
            {
                name: "Notification",
                icon: (<NotificationsNone  className="iconMUI"/>),
                selected: selected
            }],
        },
        {
            title: "USER",
            options: [{
                name: "Profile",
                icon: (<AccountCircleOutlined className="iconMUI" />),
                selected: selected
            },
            {
                name: "Settings",
                icon: (<SettingsApplications className="iconMUI"/>),
                selected: selected
            },
            {
                name: "Logout",
                icon: (<ExitToApp className="iconMUI"/>),
                selected: selected
            }],
        },
    ]


    return (
        <Container>
            <SidebarWrapper>

                <SidebarList>
                        {data.map( (menu) =>  (
                            <SidebarMenu>
                                <SidebarTitle > {menu.title} </SidebarTitle>
                                {menu.options.map( (child) => (
                                    <SidebarListItem > 
                                        {child.icon}
                                        {child.name} 
                                    </SidebarListItem>
                                ))} 
                            </SidebarMenu>
                        ))}
                </SidebarList>
            </SidebarWrapper>
        </Container>
    )
}

export default Sidebar