import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Homepage = (props) => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user) {
      if (user.user_type === "CANDIDATE") {
        history.push("/company");
      } else if (user.user_type === "COMPANY") {
        history.push("/company/jobs");
      }
    }
  }, [user]);
  return (
    <div>
      <section className="p-0 m-0 main-page" data-bg-img="./image/home-1.jpg">
        <div className=" p-5 w-50 ">
          <h1 style={{ color: "white" }}>Ai Recruitment</h1>
          <h5 style={{ color: "white" }}>
            Based On Our Ai recruitment Platform Company Can easily hire the
            employ
          </h5>
        </div>
      </section>
    </div>
  );
};

export { Homepage };
