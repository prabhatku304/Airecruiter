import React from 'react';
import {withRouter} from 'react-router-dom'
const InterviewStartPages = (props)=>{

    const StartInterview =  function() {
               
                window.open('/user/interview',)
    }
    return(
        <div className="p-0 m-0">
            <div className="">
                <div className="">
                    <img src="" alt="" />
                </div>
                <hr />
                <div className="update-btn">
                    <button className="btn" onClick={StartInterview}>Start Interview</button>
                </div>
            </div>
        </div>
    )
}

const InterviewStartPage = withRouter(InterviewStartPages)

export {InterviewStartPage}