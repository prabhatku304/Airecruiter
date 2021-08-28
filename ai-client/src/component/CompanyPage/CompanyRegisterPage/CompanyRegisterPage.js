import React, { useEffect } from "react";
import { CompanyRegisterContent } from "./CompanyRegisterContent";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../../redux/action/user";
import { useHistory } from "react-router";

const CompanyRegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
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
    console.log(value);
    value.user_type = "COMPANY";
    await dispatch(userRegisterAction(value));
  };

  return <CompanyRegisterContent onSubmitCallback={onSubmitCallback} />;
};

export { CompanyRegisterPage };
