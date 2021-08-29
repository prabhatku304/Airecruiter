import React, { useState } from "react";
import { CandidateScoreModal } from "./CandidateScoreModal";
import { useDispatch } from "react-redux";
import { jobSelectAction } from "../../../redux/action/companyJob";

const CandidateCard = ({ data, setData, isShortlisted, isSelected }) => {
  const dispatch = useDispatch();
  const [isModal, setModal] = useState(false);
  const onToggleModal = () => {
    setModal(!isModal);
  };

  const onCandidateSelection = async (candJobId, status) => {
    const body = {
      candJobId: candJobId,
      is_selected: status,
    };
    await dispatch(jobSelectAction(body, onReloadTab));
  };
  const onReloadTab = () => {
    setTimeout(window.location.reload(), 2000);
  };
  return (
    <div className="">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Full Name</th>
            <th>Resume score</th>
            <th>Technical score</th>
            <th>Personality score</th>
            {!isShortlisted && !isSelected && <th>Personality Test</th>}
            {isSelected || (isShortlisted && <th>Profile</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((ele, i) => (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>{ele.user_id && ele.user_id.name}</td>
                <td>{ele.resume_score}</td>
                <td>
                  {ele && ele.technical_score ? ele.technical_score : "N/A"}
                </td>
                <td>
                  {ele && ele.personaity_score ? ele.personaity_score : "N/A"}
                </td>
                {!isSelected && !isShortlisted && (
                  <td>
                    <input
                      checked={ele.is_shortlisted ? true : false}
                      type="checkbox"
                      // value={ele.is_shortlisted}
                      onChange={() => {
                        let tempData = [...data];
                        tempData[i].is_shortlisted = !ele.is_shortlisted;
                        setData(tempData);
                      }}
                    />
                  </td>
                )}
                {isSelected ||
                  (isShortlisted && (
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={onToggleModal}
                      >
                        View more
                      </button>
                    </td>
                  ))}
                {isModal && (
                  <CandidateScoreModal
                    isModal={isModal}
                    onToggleModal={onToggleModal}
                    data={ele}
                    onCandidateSelection={onCandidateSelection}
                  />
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateCard;
