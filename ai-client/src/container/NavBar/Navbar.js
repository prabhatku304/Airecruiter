import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { userLogoutAction } from "../../redux/action/user";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const onLogout = async () => {
    await dispatch(userLogoutAction());
  };
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <nav>
      <div className="content">
        <div className="p-2 d-flex" style={{ backgroundColor: "white" }}>
          <a href="/">
            <img
              style={{ height: 40, width: 300 }}
              src="./image/logo.png"
              alt=""
              className=""
            />
          </a>

          {/* <div className="flex ">
            <div className="">
              <a href="/company/upload/question">Upload Question</a>
            </div>
            <div className="ml-5">
              <a href="/company">Company</a>
            </div>
            <div className="ml-5">
              <a href="/company/leaderboard">Candidate</a>
            </div>
          </div> */}

          {/* <div className="flex ">
            <div className="">
              <a href="/profile">profile</a>
            </div>
            <div className="ml-5">
              <a href="/company">Company</a>
            </div>
            <div className="ml-5">
              <a href="/user/dashboard">Dashboard</a>
            </div>
            <div className="ml-5">
              <a href="/register">Resume</a>
            </div>
          </div> */}

          <div className="text-center nav-content d-flex justify-content-end flex-fill align-items-center">
            {user && user.user_type && user.user_type === "CANDIDATE" && (
              <>
                <div className="mx-3">
                  <a href="/dashboard">Dashboard</a>
                </div>
                <div className="mx-3">
                  <a href="/company">Company</a>
                </div>
                <div className="">
                  <a href="/profile">Profile</a>
                </div>
                <div className="mx-3">
                  <a href="/upload/resume">Upload Resume</a>
                </div>
              </>
            )}
            {!isAuthenticated && (
              <>
                <div className="drop">
                  <div className="company">
                    <div className="drop-down">
                      <button className=" drop-btn">Company</button>
                      <div className="dropdown-content">
                        <a href="/company/register">Register</a>
                        <a href="/company/Login">Login</a>
                      </div>
                    </div>
                  </div>
                  <div className="user">
                    <div className="drop-down">
                      <button className=" drop-btn">Candidate</button>
                      <div className="dropdown-content">
                        <a href="/register">Register</a>
                        <a href="/Login">Login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {isAuthenticated && (
              <div className="m">
                <a href="#" onClick={onLogout}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
