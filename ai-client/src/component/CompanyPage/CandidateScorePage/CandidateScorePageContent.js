import React from 'react';
import {Doughnut,Polar} from 'react-chartjs-2'

const CandidateScorePageContent = (props)=>{

    const data = {
        datasets: [{
          data: [
            11,
            16,
            7,
            14
          ],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#36A2EB'
          ],
          label: 'My dataset' 
        }],
        labels: [
          'Test Score',
          'Resume Score',
          'Interview analysis',
          'Speech analysis'
        ]
      };
    return(
        <section className="p-0 m-0">
            <div className="row p-5 mt-5">
                <div className="col-lg-6">
                    <Polar data={data} />
                </div>
                <div className="col-lg-6 p-5" style={{backgroundColor:"#e4e3e3"}}>
                    <div className="">
                        <div className="">
                            <div className="">
                                <h5>Email: {props.user.email}</h5>
                            </div>
                            <div className="">
                                <h5>Name: {props.user.name}</h5>
                            </div>
                            <div className="">
                                <span>Select: None</span>
                            </div>
                        </div>
                        <div className="text-center">
                            
                            <div className="">
                               <div className=""> <i className="u-icon fa fa-window-maximize"> Cv</i></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-5">
                            <p>Test Status: <span style={{color:"blue"}}>{props.data.is_mcq_completed ? (<>Completed</>):(<>Not Completed</>)}</span></p>
                            <p>Interview Status: <span style={{color:"blue"}}>{props.data.is_interview_completed ? (<>Completed</>):(<>Not Completed</>)}</span></p>

                        </div>
                        <div className="s-btn">
                            {props.data.is_selected ? (
                                <>Selected</>
                            ):(
                                <>
                                <div className="">
                                    <button className="btn btn-primary" onClick={()=>props.onCandidateSelection(true)}>Select Candidate<i className="l-icon fa fa-thumbs-up ml-2"></i></button>
                                </div>
                                <div className="">
                                    <button className="btn btn-danger" onClick={()=>props.onCandidateSelection(false)}>Reject Candidate<i className="l-icon fa fa-thumbs-down ml-2"></i></button>
                                </div>
                             </>
                            )}
                        
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export {CandidateScorePageContent}