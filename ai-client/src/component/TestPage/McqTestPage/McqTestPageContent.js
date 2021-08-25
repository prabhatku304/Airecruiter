import React from 'react';
import { McqTestCard } from './McqTestCard';
import { UserStatusTestApi, UserSubmitTestApi, UserInterviewMailApi } from '../../_Api/User';
import {withRouter} from 'react-router-dom'

const McqTestPageContents = (props)=>{

    const SubmitTest = (score)=>{

        UserSubmitTestApi(props.userScore._id, score)
            .then(res=>{
                alert(props.userScore.company)
                UserInterviewMailApi(props.user.id, props.userScore.company)
                    .then(res=>{
                        alert('Intreview email link has been sent')
                    }).catch(err=>{
                        alert('something went wrong')
                    })
               

                props.history.push('/user/dashboard')
            }).catch(err=>{
                console.log(err)
            })
    }
    return(
        <div className="p-0 m-0">
            <div className="container test-container">
                <McqTestCard 
                SubmitTest={SubmitTest}
                />
            </div>
        </div>
    )
}

const McqTestPageContent = withRouter(McqTestPageContents)

export {McqTestPageContent}