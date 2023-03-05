import { useEffect, useState } from "react"
import { getMyOrdersList } from "../../../ApiCalls/ordersApiCalls";
import { userRequest } from "../../../requestMethods/requestMethods"
import OrderWidget from "../../AdminComponents/Widgets/OrderWidget"



const Orders = () => {

    const [orders, setOrders] = useState();

    useEffect(() => {
        const getMyOrder = async () => {
           setOrders(await getMyOrdersList())
        }
        getMyOrder();
    }, [])

    return (
        <OrderWidget orders={orders} />
    )
}

export default Orders