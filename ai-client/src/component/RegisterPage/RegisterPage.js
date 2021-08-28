import React, { useEffect } from "react";
import { RegisterForm } from "./RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../redux/action/user";
import { useHistory } from "react-router";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      if (user.user_type === "CANDIDATE") {
        history.push("/company");
      } else if (user.user_type === "COMPANY") {
        history.push("/company/jobs");
      }
    }
  }, [user]);
  const onSubmitCallback = async (value) => {
    value.user_type = "CANDIDATE";
    await dispatch(userRegisterAction(value));
  };

  return <RegisterForm onSubmitCallback={onSubmitCallback} />;
};

export { RegisterPage };
