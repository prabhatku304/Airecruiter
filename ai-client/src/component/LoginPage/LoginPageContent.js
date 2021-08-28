import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});
const LoginPageContent = (props) => {
  return (
    <div>
      <div className="row p-0 ">
        <div className="col-lg-5 col-sm-12 p-5 card container ">
          <div className="container w-75 card-body ">
            <div className="text-center">
              <h2 style={{ color: "blue" }}>Candidate Login</h2>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={schema}
              onSubmit={props.onSubmitCallback}
            >
              {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email: </label>
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

                  <div className="update-btn">
                    <button className="btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPageContent };
