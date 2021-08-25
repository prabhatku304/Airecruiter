import React from 'react';
import { CompanyQuestionContent } from './CompanyQuestionContent';
import { CompanyQuestionUploadApi } from '../../_Api/Company';
import {connect} from 'react-redux'

class CompanyQuestionPage extends React.Component{


    onSubmitCallback = (values)=>{
        let answer = []
        answer.push(values.answer_1)
        answer.push(values.answer_2)
        answer.push(values.answer_3)
        answer.push(values.answer_4)
        let {correct, question} = values;
        CompanyQuestionUploadApi({answer, correct, question}, this.props.user.id )
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))

    }
    render(){
        return(
            <CompanyQuestionContent
            onSubmitCallback={this.onSubmitCallback}
            />

        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

CompanyQuestionPage = connect(mapStateToProps, null)(CompanyQuestionPage)

export {CompanyQuestionPage}