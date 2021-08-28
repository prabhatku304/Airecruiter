import React from "react";
import UploadResumeComponent from "./UploadResume";
import { useDispatch } from "react-redux";
import { uploadResumeAction } from "../../redux/action/resume";
import { useHistory } from "react-router";
import { candidateProfileRoute } from "../../container/route";

const CandidateResumeContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onUploadResume = async (value) => {
    await dispatch(uploadResumeAction(value, onChangeProfileRoute));
  };
  const onChangeProfileRoute = () => {
    history.push(candidateProfileRoute());
  };
  return (
    <section>
      <UploadResumeComponent onUploadResume={onUploadResume} />
    </section>
  );
};

export default CandidateResumeContainer;
