import React from "react";

const CompanyJobDetailComponent = () => {
  return (
    <div className="container">
      <div className="">
        <div className="">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Full Name</th>
                <th>Resume score</th>
                <th>Personality Test</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((ele, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>Mark</td>
                  <td>100</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Shortlist</button>
        </div>
      </div>
    </div>
  );
};
export default CompanyJobDetailComponent;
