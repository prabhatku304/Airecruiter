import React from "react";
import { LoginPageContent } from "./LoginPageContent";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../redux/action/user";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onUserLogin = async (value) => {
    await dispatch(userLoginAction(value));
  };
  return <LoginPageContent onSubmitCallback={onUserLogin} />;
};

export { LoginPage };
