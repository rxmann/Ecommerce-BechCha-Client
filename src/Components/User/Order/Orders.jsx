import { useEffect, useState } from "react"
import { getMyOrdersList } from "../../../ApiCalls/ordersApiCalls";
import OrderPage from "./OrderPage";



const Orders = () => {

    const [orders, setOrders] = useState();

    useEffect(() => {
        const getMyOrder = async () => {
           setOrders(await getMyOrdersList())
        }
        getMyOrder();
    }, [])

    return (
        <OrderPage orders={orders} />
    )
}

export default Orders