import styled from "styled-components";
import { useState } from "react";
import {
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  deleteUserAccount,
  updateUserPassword,
} from "../../../ApiCalls/UserApiCalls";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../EmptyView/ConfirmModal";

const Container = styled.div`
  display: flex; 
  margin-bottom: 50px;
  gap: 20px;
`;

const Form = styled.form`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  border-radius: 10px;
  max-width: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: white;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  flex: 1;
  font-weight: 500;
  color: gray;
`;

const ProfileContainer = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  object-fit: contain;
  width: 60%;
  
`;

const Account = ({ user, isFetching }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const [confirmAdd, setConfirmAdd] = useState();
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    confirmNewPassword: "",
    newPassword: "",
  });

  /// resetting default values
  useEffect(() => {
    const resetValues = () => {
      setFormData({
        oldPassword: "",
        confirmNewPassword: "",
        newPassword: "",
      });
    };
    resetValues();
  }, [navigate, user]);

  // handling changes in input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit updates user
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword)
      return alert("New Password do not match with the confirmation!");

    setModal(true);
  };

  useEffect(() => {
    if (confirmAdd === true) {
      updateUserPassword(dispatch, formData);
      setModal(false);
      setConfirmAdd(false);
    }
  }, [confirmAdd, dispatch, formData]);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const InputData = [
    {
      name: "oldPassword",
      label: "Old Password",
      defaultValue: formData?.username,
    },
    {
      name: "newPassword",
      label: "New Password",
      defaultValue: formData?.address,
    },
    {
      name: "confirmNewPassword",
      label: "Confirm New Password",
      defaultValue: formData?.contacts,
    },
  ];

  const handleDeleteAccount = async () => {
    await deleteUserAccount(dispatch, currentUser._id, null);
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={handleUpdate}>
        {modal && (
          <ConfirmModal
            message="You are about to change your account's password and log out."
            title="Confirm updating password?"
            modal={modal}
            setModal={setModal}
            setConfirmAdd={setConfirmAdd}
          />
        )}
        {InputData.map((input) => (
          <FormItem key={input.label}>
            <Label> {input.label} </Label>
            <OutlinedInput
              name={input.name}
              required
              variant="standard"
              value={input.defaultValue}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormItem>
        ))}

        <LoadingButton
          loading={isFetching}
          type="submit"
          size="large"
          variant="contained"
        >
          Update
        </LoadingButton>
      </Form>

      <ProfileContainer>
        <ProfileImg src={currentUser?.image} />
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={handleDeleteAccount}
        >
          {" "}
          Delete Account {currentUser?.username}{" "}
        </Button>
      </ProfileContainer>
    </Container>
  );
};

export default Account;
