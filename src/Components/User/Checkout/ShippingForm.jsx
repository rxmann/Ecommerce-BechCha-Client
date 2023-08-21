import styled from "styled-components";
import {Input } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShippingDetails,
  updateShippingDetails,
} from "../../../ApiCalls/UserApiCalls";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ShippingWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 30px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const InfoTitle = styled.span`
  flex: 1;
  padding: 10px;
  font-weight: 400;
`;

const FormInput = styled(Input)`
  flex: 2;
`;

const ShippingForm = () => {
  const dispatch = useDispatch();
  const { currentUser, isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // update / add shipping details
  const handleConfirm = async () => {
    try {
      const formData = new FormData();
      formData.append("recipient", form.recipient);
      formData.append("shippingAddress", form.shippingAddress);
      formData.append("billingAddress", form.billingAddress);
      formData.append("contacts", form.contacts);
      formData.append("email", form.email);

     const response =  await updateShippingDetails(dispatch, formData);

     if (response)  navigate("/checkout-form/confirmation");
      
    } catch (err) {}
  };

  // form for shipping details
  const [form, setForm] = useState({
    recipient: "",
    billingAddress: "",
    shippingAddress: "",
    contacts: "",
  });
  // updating form
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // get shipping details before hand
  useEffect(() => {
    const getUserInfo = async () => {
      const shipD = await getShippingDetails(currentUser._id);
      shipD &&
        setForm({
          recipient: shipD.recipient,
          billingAddress: shipD.billingAddress,
          shippingAddress: shipD.shippingAddress,
          contacts: shipD.contacts,
        });
    };

    getUserInfo();
  }, [currentUser?._id]);

  return (
    <Container>
      <ShippingWrapper>
        <Form>
          <FormItem>
            <InfoTitle> Recepitant Name </InfoTitle>
            <FormInput
              name={"recipient"}
              value={form?.recipient}
              onChange={updateForm}
              required
            />
          </FormItem>
          <FormItem>
            <InfoTitle> Billing Address </InfoTitle>
            <FormInput
              name={"billingAddress"}
              value={form?.billingAddress}
              onChange={updateForm}
              required
            />
          </FormItem>
          <FormItem>
            <InfoTitle> Shipping Address </InfoTitle>
            <FormInput
              name={"shippingAddress"}
              value={form?.shippingAddress}
              onChange={updateForm}
              required
            />
          </FormItem>
          <FormItem>
            <InfoTitle> Contacts </InfoTitle>
            <FormInput
              name={"contacts"}
              value={form?.contacts}
              onChange={updateForm}
              type="tel"
              required
            />
          </FormItem>

          <LoadingButton
          onClick={handleConfirm}
                            loading={isFetching}
                            type="submit"
                            size="large"
                            variant="contained"
                        >
                            Confirm
                        </LoadingButton>
        </Form>
      </ShippingWrapper>
    </Container>
  );
};

export default ShippingForm;
