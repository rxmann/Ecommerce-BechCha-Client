import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../../Components/AdminComponents/Tables/DataTable';
import { useEffect, useState } from 'react';
import { getAllOrdersAsAdmin } from '../../ApiCalls/ordersApiCalls';
import moment from 'moment';



const Container = styled.div`
    flex: 5;
    padding: 20px;
    background-color: #f5f7f8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Title = styled.h1`
  font-size: 24px;
    font-weight: 500;
    color: gray;
`

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const ViewButton = styled(Button)`
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
  color: #0171b6;
  border: 1px solid #0171b6;
`

const DelBtn = styled(Button)`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`
const StatusCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Profile = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`

const Price = styled.span`
    font-weight: 500;
    font-size: 16px;
`
const StatusButton = ({ type }) => {
    let color, background;
    switch (type) {
        case "pending":
            color = "error"
            background = "#fff0f1"
            break;
        case "delivered":
            color = "success"
            background = "#e5faf2"
            break;
        default:
            return;
    }
    return <Button size={"small"} color={color} sx={{ background: background }} type={type}> {type} </Button>
}

const OrdersTab = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);


    useEffect(() => {
        const getOrds = async () => {
            const ordersList = await getAllOrdersAsAdmin();
            setData(ordersList)
        }
        getOrds();
    }, [])




    const DeleteThisOrder = async (id) => {

    }


    const actionColumn = [
        { headerName: "Order ID", headerClassName: "header-datatable", field: "_id", flex: 2 },
        {
            headerName: "Customer",
            headerClassName: "header-datatable",
            field: "user",
            flex: 1,
            renderCell: (params) => {
                return (
                    <StatusCell >
                        <Profile src={params.row.user?.image} />
                        {params.row.user.username}
                    </StatusCell>
                )
            },
        },
        {
            headerName: "Product",
            headerClassName: "header-datatable",
            field: "products",
            flex: 2,
            renderCell: (params) => {
                return (
                    <StatusCell >
                        {params.row.totalItems} items

                        {params.row.products?.map(prod =>
                            <Profile 
                                key={prod.product.images[0].public_id} 
                                src={prod.product.images[0].url} 
                            />
                        )}
                    </StatusCell>
                )
            },
        },
        {
            headerName: "Date",
            headerClassName: "header-datatable",
            field: "createdAt",
            flex: 1,
            renderCell: (params) => {
                return (
                    moment(params.row.createdAt).format('MMM DD, YYYY')
                )
            }
        },
        {
            field: "Status",
            headerName: "Status",
            headerClassName: "header-datatable",
            flex: 1,
            renderCell: (params) => {
                return (
                    params.row.status === "delivered" ? <StatusButton type={"delivered"} /> : <StatusButton type={"pending"} />
                )
            }
        },
        {
            headerName: "Amount",
            headerClassName: "header-datatable",
            field: "totalAmount",
            flex: 1,
            renderCell: (params) => {
                return (
                    <Price>
                        RS {params.row.payable}
                    </Price>
                )
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            headerClassName: "header-datatable",
            flex: 1,
            renderCell: (params) => {
                return (
                    <ActionCell>
                        <ViewButton onClick={() => navigate(`/admin/category/${params.row._id}`)}> View </ViewButton>
                        {/* <DelBtn
                            size="small"
                            variant="text"
                            color="error"
                            onClick={() => { DeleteThisOrder(params.row._id) }}
                        >
                            <DeleteOutline />
                        </DelBtn> */}
                    </ActionCell>
                )
            }
        }
    ]


    return (
        <Container>
            <Wrapper>
                <Title> Orders List </Title>
            </Wrapper>
            <DataTable
                rows={data}
                columns={actionColumn}
            />
        </Container>
    )
}

export default OrdersTab