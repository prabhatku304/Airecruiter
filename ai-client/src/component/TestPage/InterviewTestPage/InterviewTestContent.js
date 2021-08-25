import React from 'react';
import { InterviewQuestion } from './InterviewQuestion';
import { WebCamPage } from '../../WebCamPage/WebCamPage';

const InterviewTestContent = (props)=>{


    return(
        <div>
            <div className="o-hidden">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="">
                            <div className="">
                                <WebCamPage 
                                 test_id = {props.test_id}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <div>
                            <div className='inner-card'>
                                <div className="container">
                                    <InterviewQuestion />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export {InterviewTestContent}