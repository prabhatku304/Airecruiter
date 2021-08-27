import React from "react";
import { CompanyLoginContent } from "./CompanyLoginContent";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../../redux/action/user";

const CompanyLoginPage = () => {
  const dispatch = useDispatch();
  const onSubmitCallback = async (value) => {
    await dispatch(userLoginAction(value));
  };

  return <CompanyLoginContent onSubmitCallback={onSubmitCallback} />;
};

export { CompanyLoginPage };
