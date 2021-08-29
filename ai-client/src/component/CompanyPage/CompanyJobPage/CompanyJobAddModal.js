import React from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import * as yup from "yup";
import propTypes from "prop-types";

const schema = yup.object().shape({
  job_title: yup
    .string("Title should be string")
    .required("Job title is required"),
  job_description: yup
    .string("Job description should be string")
    .required("Job description is required"),
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
  },
};
const CompanyJobAddModal = (props) => {
  return (
    <Modal
      isOpen={props.isModal}
      onRequestClose={props.onToggleModal}
      className="f-modal br-10"
      overlayClassName="f-modal-overlay"
      style={customStyles}
      shouldCloseOnOverlayClick={false}
    >
      <Formik
        validationSchema={schema}
        initialValues={{ job_title: "", job_description: "" }}
        onSubmit={props.onCreateCompanyJob}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          values,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className="m-1 d-flex flex-fill">
            <div className="container">
              <div className="d-flex justify-content-end">
                <i
                  className="fas fa-times justify-content-end"
                  onClick={props.onToggleModal}
                ></i>
              </div>
              <div className="d-flex justify-content-around align-items-center flex-column">
                <div className="title mb-3">
                  <h4 className="title t-text">Create Job </h4>
                </div>
                <div className="form-group mt-2 w-70">
                  <input
                    placeholder="Title *"
                    value={values.job_title}
                    name="job_title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control w-100"
                    required
                  />
                  {errors.job_title && touched.job_title && (
                    <p className="e-text d-flex">{errors.job_title}</p>
                  )}
                </div>
                <div className="form-group mt-2 w-70">
                  <textarea
                    style={{height:100}}
                    placeholder="Description *"
                    value={values.job_description}
                    name="job_description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control w-100"
                    required
                  ></textarea>
                  {errors.job_description && touched.job_description && (
                    <p className="e-text d-flex">{errors.job_description}</p>
                  )}
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary w-fc">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};
CompanyJobAddModal.propTypes = {
  isModal: propTypes.bool,
  onToggleModal: propTypes.func,
  onCreateNewJob: propTypes.func,
};
export default CompanyJobAddModal;
