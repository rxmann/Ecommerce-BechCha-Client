import { useEffect, useState } from "react"
import { userRequest } from "../../../requestMethods/requestMethods"
import OrderWidget from "../../AdminComponents/Widgets/OrderWidget"



const Orders = () => {

    const [orders, setOrders] = useState();

    useEffect(() => {
        const getMyOrder = async () => {
            try {
                const response = await userRequest.get("/orders");
                setOrders(response.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        getMyOrder();
    }, [])

    return (
        <OrderWidget orders={orders} />
    )
}

export default Orders