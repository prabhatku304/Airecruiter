import React, { useState, useEffect } from "react";

const CompanyJobDetailComponent = ({ appliedData, onJobShortlisting }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(appliedData);
  }, [appliedData]);
  const onShortlistedCandidate = () => {
    onJobShortlisting(data);
  };
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
              {data &&
                data.map((ele, i) => (
                  <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{ele.user_id && ele.user_id.name}</td>
                    <td>{ele.resume_score}</td>
                    <td>
                      <input
                        checked={ele.is_shortlisted ? true : false}
                        type="checkbox"
                        // value={ele.is_shortlisted}
                        onChange={() => {
                          let tempData = [...data];
                          tempData[i].is_shortlisted = !ele.is_shortlisted;
                          console.log(tempData);
                          setData(tempData);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={onShortlistedCandidate}>
            Shortlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default CompanyJobDetailComponent;
