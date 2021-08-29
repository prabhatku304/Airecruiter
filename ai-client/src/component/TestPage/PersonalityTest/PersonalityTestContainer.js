import React from "react";
import { Test } from "./PersonalityTestComponent";
import { useDispatch, useSelector } from "react-redux";
import { personalityTestSubmitAction } from "../../../redux/action/userTest";
import { useParams } from "react-router";
import { PageSpinner } from "../../UserProfile/PageSpinner";

const PersonalityTestContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const isTestSubmitPending = useSelector(
    (state) => state.test.isPersonaltyTestSubmitPending
  );
  const onSubmitPersonalityTest = async (type) => {
    let tempData = [];
    const resulType = tempData.filter((ele) => ele.code === type);
    const body = {
      personality_score: resulType,
      company_job: params.jobId,
    };
    await dispatch(personalityTestSubmitAction(body, onGoBack));
  };
  const onGoBack = () => {
    setTimeout(window.close, 2000);
  };
  return (
    <section>
      <PageSpinner isLoading={isTestSubmitPending} />
      <Test onSubmitPersonalityTest={onSubmitPersonalityTest} />
    </section>
  );
};

export default PersonalityTestContainer;
