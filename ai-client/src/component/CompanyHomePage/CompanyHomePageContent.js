import React, { Component } from "react";
import { CompanyCard } from "./CompanyCard";
import Typist from "react-typist";

const CompanyHomePageContent = (props) => {
  return (
    <section>
      <div className="">
        <div className="">
          <img src="./image/company.jpg" alt="" className="im" />
          <div className="p-absolute company-title">
            <Typist
              avgTypingDelay={40}
              startDelay={2000}
              cursor={true}
              className="typist-title"
            >
              <span>Our Company Provides best service to Employee</span>
            </Typist>
          </div>
        </div>
        <div className="container">
          <div className="my-5">
            <CompanyCard data={props.data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CompanyHomePageContent };
