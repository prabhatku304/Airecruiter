import React from "react";
import { CompanyRegisterContent } from "./CompanyRegisterContent";
import { useDispatch } from "react-redux";
import { userRegisterAction } from "../../../redux/action/user";

const CompanyRegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmitCallback = async (value) => {
    console.log(value);
    value.user_type = "COMPANY";
    await dispatch(userRegisterAction(value));
  };

  return <CompanyRegisterContent onSubmitCallback={onSubmitCallback} />;
};

export { CompanyRegisterPage };
