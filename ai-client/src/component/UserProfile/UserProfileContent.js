import React from "react";
import { PageSpinner } from "./PageSpinner";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  college: yup.string(),
  experience: yup.string().required("Exprience is required"),
  languages: yup.string(),
  skills: yup.string().required("Skills is required"),
  contact: yup.string().required("Contact is required"),
  email: yup.string(),
  name: yup.string(),
});
const UserProfileContent = (props) => {
  return (
    <div className="p-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="o-hidden p-2">
                  <img
                    style={{ height: 200, width: 200 }}
                    src="https://cdna.artstation.com/p/assets/images/images/023/576/078/original/ying-chen-me-optimize.gif?1579652163"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 ">
            <div className="container card">
              <div className="card-body">
                <div className=" card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Name</p>
                      <h5 className="profile-text">
                        {props.profile && props.profile.name}
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <p>College</p>
                      <h5 className="profile-text">
                        {props.profile && props.profile.college}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Contact</p>
                      <h5 className="profile-text">
                        {props.profile && props.profile.contact}
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <p>Email</p>
                      <h5 className="profile-text">
                        {props.profile && props.profile.email}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>skills</p>
                      <h6 className="profile-text">
                        {props.profile && props.profile.skills}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>experience</p>
                      <p className="profile-text">
                        {props.profile && props.profile.experience}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="">
                  <Formik
                    enableReinitialize
                    initialValues={{
                      name: props.profile && props.profile.name,
                      email: props.profile && props.profile.email,
                      contact: props.profile && props.profile.contact,
                      skills: props.profile && props.profile.skills,
                      experience: props.profile && props.profile.experience,
                      college: props.profile && props.profile.college,
                    }}
                    validationSchema={schema}
                    onSubmit={props.onUpdateUserProfile}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      values,
                      errors,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Full Name</label>
                              <input
                                type="text"
                                value={values.name}
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="name"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="email"
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="email"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Contact</label>
                              <input
                                value={values.contact}
                                type="tel"
                                name="contact"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="contact"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>College</label>
                              <input
                                type="text"
                                value={values.college}
                                name="college"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="college"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Skills</label>
                              <textarea
                                value={values.skills}
                                name="skills"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Skills"
                                className="form-control"
                                cols={100}
                                rows={10}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>experience</label>
                              <textarea
                                value={values.experience}
                                name="experience"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="experience"
                                className="form-control"
                                cols={100}
                                rows={10}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row update-btn">
                          <button className="btn ">Update</button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfileContent };
