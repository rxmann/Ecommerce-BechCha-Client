import { Button } from '@mui/material';
import KhaltiCheckout from "khalti-checkout-web";
import { userRequest } from "../../requestMethods/requestMethods";
import { khaltiKeys } from "./khaltiKey";
import { makeAnOrder } from '../../ApiCalls/ordersApiCalls';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';

const Khalti = ({ order, amount }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    let kconfig = {
        // replace this key with yours
        "publicKey": khaltiKeys.PUBLIC_KEY,
        "productIdentity": "0987654321",
        "productName": "Drogon",
        "productUrl": "http://localhost:3000/product/63ecc19391f01043eaed762f",
        "eventHandler": {
            onSuccess(payload) {
                // hit merchant api for initiating verfication
                console.log(payload);

                let data = {
                    "token": payload.token,
                    "amount": payload.amount
                };

                userRequest.post('/orders/pay-khalti', data)
                    .then(async (response) => {
                        console.log(response.data);

                        // if (amount === response.data.amount) {

                        // }
                        await makeAnOrder(dispatch,
                            {
                                orderData: order,
                                totalPayable: amount,
                                type: response.data.type.name,

                            })
                        navigate("/profile/orders/me")
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            // onError handler is optional
            onError(error) {
                // handle errors
                console.log(error);
            },
            onClose() {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "MOBILE_BANKING",],
    };


    let checkout = new KhaltiCheckout(kconfig);

    return (
        <LoadingButton
            fullWidth
            color="secondary"
            variant='contained'
            // amount : amount * 100
            onClick={() => checkout.show({ amount: 20000 })}  > Pay via Khalti  </LoadingButton>
    )
}

export default Khalti