import React from 'react';
import {connect} from 'react-redux'
import { UserCompanyAppliedList } from '../../_Api/Company';
import { CompanyLeaderContent } from './CompanyLeaderContent';
import { PageSpinner } from '../../UserProfile/PageSpinner';


class CompanyLeaderPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount(){

        UserCompanyAppliedList(this.props.company.company_id)
                .then(res=>{
                    this.setState({data: res.data})
                    console.log(res.data)
                }).catch(err=>console.log(err))
    }
    OpenCandidate = (id)=>{
            this.props.history.push(`/candidate/profile/${id}`)
    }

    render(){
        return(
            <div>
                {this.state.data ? (
                    <CompanyLeaderContent
                        data={this.state.data}
                        OpenCandidate={this.OpenCandidate}
                    />
                ):(
                    <PageSpinner />
                )}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        company: state.user.user
    }
}

CompanyLeaderPage = connect(mapStateToProps, null)(CompanyLeaderPage);
export {CompanyLeaderPage}