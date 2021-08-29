import React, { useEffect } from "react";
import { LoginPageContent } from "./LoginPageContent";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../redux/action/user";
import { useHistory } from "react-router";
import { PageSpinner } from "../UserProfile/PageSpinner";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const isLoginPending = useSelector((state) => state.user.isPendingLogin);
  useEffect(() => {
    if (user) {
      if (user.user_type === "CANDIDATE") {
        history.push("/company");
      } else if (user.user_type === "COMPANY") {
        history.push("/company/jobs");
      }
    }
  }, [user]);
  const onUserLogin = async (value) => {
    await dispatch(userLoginAction(value));
  };
  return (
    <>
      <PageSpinner isLoading={isLoginPending} />
      <LoginPageContent onSubmitCallback={onUserLogin} />{" "}
    </>
  );
};

export { LoginPage };
