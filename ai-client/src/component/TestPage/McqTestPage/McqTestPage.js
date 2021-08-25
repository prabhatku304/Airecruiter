import React from 'react';
import { McqTestPageContent } from './McqTestPageContent';
import { UserStatusTestApi } from '../../_Api/User';
import {connect} from 'react-redux'
import { PageSpinner } from '../../UserProfile/PageSpinner';
import { InterviewStartPage } from '../InterviewTestPage/InterviewStartPage';
import { UserStatus } from '../../../redux/actionCreater/userTest';

class McqTestPage extends React.Component{

    constructor(props){
        super(props);
        this.c_id = null
        this.state={
            data:null,
            
        }
    }
    componentDidMount(){
        this.c_id = this.props.match.params.id;
        UserStatusTestApi(this.props.user.id,this.c_id )
            .then(res=>{
                this.setState({data: res.data})
                console.log(res.data)
                this.props.UserScore(res.data)
            })
            .catch(err=>console.log(err))
    }
    render(){
         if(this.state.data){
            return(
                <div>
                    {!this.state.data.is_mcq_completed  ? (<McqTestPageContent 
                    userScore={this.state.data}
                    user={this.props.user}
                    />):(null)}
                   {this.state.data.is_mcq_completed && !this.state.data.is_interview_completed ? (
                   <div className="text-center p-5">
                   <h4 style={{color: "blue", fontWeight:"bold"}}>
                       InterView Test are not completed
                   </h4>
                   </div>
                   ):(null)}
                    {this.state.data.is_mcq_completed && this.state.data.is_interview_completed ? (<div>Test completed</div>):(null)}
                    {/* <McqTestPageContent 
                    userScore={this.state.data}
                    user={this.props.user}
                    /> */}
                </div>
               
            )
         }else{
             return(
                 <PageSpinner />
             )
         }
        
    }
}

function mapStateToProps(state){
    return {
        user: state.user.user
    }
}
function mapStateToDispatch(dispatch){
    return{
        UserScore: (data)=>dispatch(UserStatus(data))
    }
}

McqTestPage = connect(mapStateToProps, mapStateToDispatch)(McqTestPage)
export {McqTestPage}