import { Button, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { updateThisOrder } from "../../../ApiCalls/ordersApiCalls";
import { useNavigate } from "react-router-dom";



const Container = styled.div`
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const Selector = styled.div`
    width: 140px;
`

const AdminOrderControls = ({ data }) => {

    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    const [itemsList, setItemsList] = useState(data.status);


    const handleUpdateOrder = async () => {
        const orderId = data._id;
        const ress = await updateThisOrder(orderId, selected);
        ress === true && navigate(`/admin/order/${orderId}`)
    }


    useEffect(() => {
        const sta = data.status;
        switch (sta) {
            case "pending":
                setItemsList("processing")
                break;
            case "cancelled":
                setItemsList()
                break;
            case "processing":
                setItemsList("shipping")
                break;
            case "shipping":
                setItemsList("delivered")
                break;
            case "delivered":
                setItemsList()
                break;
            default:
                setItemsList("failed")
                break;
        }
    }, [data])

    return (
        <Container>
            {itemsList   &&
                <>
                    <Selector>
                        <Select
                            fullWidth
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                                <MenuItem value={itemsList} > {itemsList} </MenuItem>
                        </Select>
                    </Selector>

                    <Button 
                        variant={"contained"} 
                        size="large"
                        onClick = {handleUpdateOrder}
                    > 
                        Move to {selected} 
                    </Button>
                </>
            }

        </Container>
    )
}

export default AdminOrderControls