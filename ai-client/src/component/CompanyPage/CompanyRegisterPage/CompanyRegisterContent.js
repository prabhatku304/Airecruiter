import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
  company_name: yup.string().required("company name is required"),
  description: yup.string(),
});
const CompanyRegisterContent = (props) => {
  return (
    <div>
      <div className="row p-0">
        <div className="col-lg-7 col-sm-12 text-center">
          <div className="title">
            <div className="img-register">
              <img className="img-fluid" src="/image/c-register.jpg" alt="" />
              <h3> Welcome to Our Company Register Portal</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 p-5 container">
          <div className="container w-75">
            <div className="text-center">
              <h2 style={{ color: "blue" }}>Company Register</h2>
            </div>
            {/* <div className="container"> */}
            <Formik
              initialValues={{
                email: undefined,
                company_name: undefined,
                password: undefined,
                description: undefined,
              }}
              validationSchema={schema}
              onSubmit={props.onSubmitCallback}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="email"
                      required
                      onBlur={handleBlur}
                    />
                    <label className="text-error">{errors.email}</label>
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="password"
                      onBlur={handleBlur}
                    />
                    <label className="text-error">{errors.password}</label>
                  </div>

                  <div className="form-group">
                    <label>Company Name:</label>
                    <input
                      type="text"
                      name="company_name"
                      value={values.company_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="form-control"
                      placeholder="company name"
                    />
                    <label className="text-error">{errors.company_name}</label>
                  </div>
                  {/* <div className="form-group">
                    <label>Image Url</label>
                    <input
                      type="text"
                      name="url"
                      value={this.state.url}
                      onChange={(e) => {
                        this.setState({ url: e.target.value });
                      }}
                      className="form-control"
                      placeholder="Image Url"
                    />
                    <label className="text-error">{errors.name}</label>
                  </div> */}
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      placeholder="Description"
                      row={3}
                    />
                  </div>

                  <div className="update-btn">
                    <button className="btn" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              )}
            </Formik>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CompanyRegisterContent };
