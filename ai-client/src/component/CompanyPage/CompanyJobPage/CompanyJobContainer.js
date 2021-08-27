import React, { useState, useEffect } from "react";
import CompanyJobComponent from "./CompanyJobComponent";
import CompanyJobAddModal from "./CompanyJobAddModal";
import { useDispatch, useSelector } from "react-redux";
import {
  companyJobAddAction,
  companyJobGetAction,
} from "../../../redux/action/companyJob";

const CompanyJobContainer = () => {
  const dispatch = useDispatch();
  const [isModal, setModal] = useState(false);
  const user = useSelector((state) => state.user.user);
  const onToggleModal = () => {
    setModal(!isModal);
  };
  const onCreateCompanyJob = async (value) => {
    if (user && user.company) {
      value.company = user.company;
      await dispatch(companyJobAddAction(value, onCompanyJobgetAction));
    }
  };
  const onCompanyJobgetAction = async () => {
    if (user && user.company) {
      const query = {
        company: user.company,
      };
      await dispatch(companyJobGetAction(query));
    }
  };
  useEffect(() => {
    onCompanyJobgetAction();
  }, [user]);

  return (
    <section>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-end">
          <a className="navbar-brand" onClick={onToggleModal}>
            Add job
          </a>
        </div>
      </nav>
      <div className="">
        <CompanyJobComponent />
      </div>
      {isModal && (
        <CompanyJobAddModal
          isModal={isModal}
          onToggleModal={onToggleModal}
          onCreateCompanyJob={onCreateCompanyJob}
        />
      )}
    </section>
  );
};

export default CompanyJobContainer;
