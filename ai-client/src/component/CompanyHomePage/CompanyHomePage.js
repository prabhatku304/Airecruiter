import React, { Component, useEffect } from "react";

import { CompanyHomePageContent } from "./CompanyHomePageContent";
import { PageSpinner } from "../UserProfile/PageSpinner";
import { useDispatch, useSelector } from "react-redux";
import { companyJobGetAction } from "../../redux/action/companyJob";

const CompanyHomePage = () => {
  const dispatch = useDispatch();
  const companyJobs = useSelector((state) => state.companyJob.companyJob);
  const user = useSelector((state) => state.user.user);
  const onGetCompanyJobs = async () => {
    await dispatch(companyJobGetAction());
  };
  useEffect(() => {
    onGetCompanyJobs();
  }, []);
  return <CompanyHomePageContent data={companyJobs} user={user} />;
};

export { CompanyHomePage };
