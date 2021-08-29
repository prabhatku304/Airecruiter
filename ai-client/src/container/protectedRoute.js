import React from "react";
import { routeType } from "../constant/route_constant";
import { LoginPage } from "../component/LoginPage/LoginPage";
import { RegisterPage } from "../component/RegisterPage/RegisterPage";
import CandidateResumePage from "../component/CandidateResumePage/CandidateResumePage";
import { CompanyHomePage } from "../component/CompanyHomePage/CompanyHomePage";
import JobDetailPage from "../component/JobDetailPage/JobDetailPage";
import { CompanyRegisterPage } from "../component/CompanyPage/CompanyRegisterPage/CompanyRegisterPage";
import { CompanyLoginPage } from "../component/CompanyPage/CompanyLoginPage/CompanyLoginPage";
import CompanyJobPage from "../component/CompanyPage/CompanyJobPage/CompanyJobPage";
import CompanyJobDetailPage from "../component/CompanyPage/CompanyJobDetailPage/CompanyJobDetailPage";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PageSpinner } from "../component/UserProfile/PageSpinner";
import { UserProfilePage } from "../component/UserProfile/UserProfilePage";
import { McqTestPage } from "../component/TestPage/McqTestPage/McqTestPage";
import { DashboardPage } from "../component/DashboardPage/DashboardPage";
import PersonalityTest from "../component/TestPage/PersonalityTest/PersonalityTest";

const ProtectedRoute = ({ accessType, type }) => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const isUserGetPending = useSelector((state) => state.user.isUserGetPending);
  const onRenderComponent = (type) => {
    switch (type) {
      case routeType.CANDIDATE_LOGIN_VIEW:
        return <LoginPage />;
      case routeType.CANDIDATE_REGISTER_VIEW:
        return <RegisterPage />;
      case routeType.CANDIDATE_UPLOAD_RESUME_VIEW:
        return <CandidateResumePage />;
      case routeType.CANDIDATE_COMPANY_JOBS_VIEW:
        return <CompanyHomePage />;
      case routeType.CANDIDATE_JOB_DETAIL_VIEW:
        return <JobDetailPage />;
      case routeType.CANDIDATE_PROFILE_VIEW:
        return <UserProfilePage />;
      case routeType.CANDIDATE_DASHBOARD_VIEW:
        return <DashboardPage />;

      case routeType.COMPANY_REGISTER_VIEW:
        return <CompanyRegisterPage />;
      case routeType.COMPANY_LOGIN_VIEW:
        return <CompanyLoginPage />;
      case routeType.COMPANY_JOBS_VIEW:
        return <CompanyJobPage />;
      case routeType.COMPANY_JOB_DETAIL_VIEW:
        return <CompanyJobDetailPage />;

      case routeType.TECHNICAL_TEST_VIEW:
        return <McqTestPage />;
      case routeType.PERSONALITY_TEST_VIEW:
        return <PersonalityTest />;
    }
  };
  if (isAuthenticated && user) {
    console.log(1);
    return onRenderComponent(type);
  } else if (
    (isAuthenticated === null || user === null) &&
    isUserGetPending === false
  ) {
    console.log(2);

    history.push("/");
    return <div> </div>;
  } else {
    console.log(3);

    return <PageSpinner />;
  }
};

export default ProtectedRoute;
