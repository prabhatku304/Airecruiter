import React from "react";
import { InterviewTestContent } from "./InterviewTestContent";
import { PageSpinner } from "../../UserProfile/PageSpinner";
import {connect} from 'react-redux'

class InterviewTestPage extends React.Component{


    render(){

        const c_id = this.props.match.params.c_id
        const user_id = this.props.match.params.user_id;
        console.log(this.props.user.id)
        
        if(true){
        return(
            
            <InterviewTestContent
            user={this.props.user}
            test_id={c_id}
            />
        )}
        else{
            return(
                <PageSpinner />
            )
            
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user,
        isAuthenticated: state.user.isAuthenticated,
        test: state.test.test
    }
}

InterviewTestPage = connect(mapStateToProps,null)(InterviewTestPage)
export {InterviewTestPage}