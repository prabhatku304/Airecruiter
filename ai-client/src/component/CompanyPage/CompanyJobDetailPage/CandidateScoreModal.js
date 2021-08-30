import React from "react";
import { Doughnut, Polar } from "react-chartjs-2";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
  },
};
const CandidateScoreModal = (props) => {
  const resume_score =
    props.data && props.data.resume_score ? props.data.resume_score : 0;
  const technical_score =
    props.data && props.data.technical_score ? props.data.technical_score : 0;
  const personaity_score =
    props.data && props.data.personaity_score ? props.data.personaity_score : 0;
  const data = {
    datasets: [
      {
        data: [resume_score, technical_score, personaity_score],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56"],
        label: "My dataset",
      },
    ],
    labels: ["Resume Score", "Technical Score", "Personality Score"],
  };
  return (
    <Modal
      isOpen={props.isModal}
      onRequestClose={props.onToggleModal}
      className="f-modal br-10"
      overlayClassName="f-modal-overlay"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div className="d-flex flex-fill">
        <div className="row d-flex flex-fill">
          <div className="col-6">
            {/* {props.data && <Polar data={data} height={200} />} */}
            <div className="p-3">
              <div className="">
                <h5>
                  {props.data &&
                    props.data.personality_score &&
                    props.data.personality_score.length > 0 &&
                    props.data.personality_score[0].code}
                </h5>
                <p>
                  {props.data &&
                    props.data.personality_score &&
                    props.data.personality_score.length > 0 &&
                    props.data.personality_score[0].title}
                </p>
              </div>
              <div className="">
                <h5>Professional </h5>
                <ul>
                  {props.data &&
                    props.data.personality_score &&
                    props.data.personality_score.length > 0 &&
                    props.data.personality_score[0].professional_field &&
                    props.data.personality_score[0].professional_field.map(
                      (ele) => <li>{ele}</li>
                    )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex" style={{ backgroundColor: "#e4e3e3" }}>
            <div className="d-flex justify-content-evenly flex-column">
              <div className="">
                {/* <div className="">
                  <h5>Email: {props.data && props.data.email}</h5>
                </div>
                <div className="">
                  <h5>Name: {props.data && props.data.name}</h5>
                </div> */}
                <div className="">
                  <span>Select: None</span>
                </div>
              </div>
              <div className="text-center">
                <div className="">
                  <div className="">
                    {" "}
                    <i className="u-icon fa fa-window-maximize"> Cv</i>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-evenly">
                <div className="">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      props.onCandidateSelection(
                        props.data && props.data._id,
                        true
                      )
                    }
                  >
                    Select
                    <i className="l-icon fa fa-thumbs-up mx-2"></i>
                  </button>
                </div>
                <div className="">
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      props.onCandidateSelection(
                        props.data && props.data._id,
                        false
                      )
                    }
                  >
                    Reject
                    <i className="l-icon fa fa-thumbs-down "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { CandidateScoreModal };
