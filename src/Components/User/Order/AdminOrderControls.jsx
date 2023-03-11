import { Button, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const Selector = styled.div`
    max-width: 140px;
`

const AdminOrderControls = ({ data }) => {

    const [selected, setSelected] = useState("");
    const [itemsList, setItemsList] = useState([]);


    useEffect(() => {
        const sta = data.status;
        switch (sta) {
            case "pending":
                setItemsList(["cancelled", "processing"])
                break;
            case "cancelled":
                setItemsList(["cancelled"])
                break;
            case "processing":
                setItemsList(["shipping"])
                break;
            case "shipping":
                setItemsList(["delivered"])
            case "delivered":
                setItemsList(["success"])
                break;
            default:
                setItemsList(["failed"])
                break;
        }
    }, [data])

    return (
        <Container>
           <Selector>
           <Select
                fullWidth
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                {itemsList.length > 0 && itemsList?.map((item) => (
                    <MenuItem key={item} value={item} > {item} </MenuItem>
                ))}
            </Select>
           </Selector>

           <Button variant={"contained"} size="large"> Move to {selected} </Button>

        </Container>
    )
}

export default AdminOrderControls