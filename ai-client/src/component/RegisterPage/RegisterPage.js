import React from "react";
import { RegisterForm } from "./RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../redux/action/user";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const onSubmitCallback = async (value) => {
    value.user_type = "CANDIDATE";
    await dispatch(userRegisterAction(value));
  };

  return <RegisterForm onSubmitCallback={onSubmitCallback} />;
};

export { RegisterPage };
