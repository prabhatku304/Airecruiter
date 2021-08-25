import React,{Component} from 'react';
import { CompanyApi } from '../_Api/Company';
import { CompanyHomePageContent } from './CompanyHomePageContent';
import { PageSpinner } from '../UserProfile/PageSpinner';
import {connect} from 'react-redux'
import { UserDataApi } from '../_Api/User';

class CompanyHomePages extends Component{

    constructor(props){
        super(props)
        this.state={
            data: null,
            isLoad: false,
            company:null
        }
    }

    componentDidMount(){
        CompanyApi()
            .then(res=>{
                this.setState({data: res.data})
                console.log(res.data)
            }).catch(err=>console.log(err))
        UserDataApi(this.props.user.id)
            .then(res=>{
                console.log(res.data)
                this.setState({company: res.data, isLoad: true})
            }).catch(err=>console.log(err.data))
    }


    render(){
        if(this.state.data && this.state.company && this.props.user){
        return(
            <CompanyHomePageContent 
                data = {this.state.data}
                user={this.props.user}
                userRegisteredCompany ={this.state.company}
                />

        )}else{
            return(
                <PageSpinner />
            )
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

 const CompanyHomePage = connect(mapStateToProps, null)(CompanyHomePages)

export {CompanyHomePage}