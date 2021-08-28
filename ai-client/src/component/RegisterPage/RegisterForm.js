import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is Required"),
  name: yup.string().required("name is required"),
  password: yup.string().required("password is required"),
});
const RegisterForm = (props) => {
  return (
    <div>
      <div className="row p-0">
        <div className="col-lg-7 col-sm-12 p-5 text-center container">
          <div className="container w-50">
            <div className="">
              <img src="" alt="" />
            </div>
            {/* <div className="container"> */}
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={schema}
              onSubmit={props.onSubmitCallback}
            >
              {({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      placeholder="Name"
                    />
                    <label className="text-error">{errors.name}</label>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      placeholder="email"
                    />
                    <label className="text-error">{errors.email}</label>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      placeholder="password"
                    />
                    <label className="text-error">{errors.password}</label>
                  </div>

                  <div>
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              )}
            </Formik>
            {/* </div> */}
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 text-center">
          <div className="title">
            <h3> Welcome to Our Candidate Registeration</h3>
          </div>
          <div className="container p-5 mt-5" style={{ overflow: "hidden" }}>
            <img
              style={{ height: 400, width: 500 }}
              src="./image/register.png"
              alt=""
              className="fluid-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RegisterForm };
