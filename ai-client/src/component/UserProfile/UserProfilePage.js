import React from 'react';
import { UserProfileContent } from './UserProfileContent';
import { UserProfile, UserProfileUpdateApi } from '../_Api/User';
import {connect} from 'react-redux'
import { PageSpinner } from './PageSpinner';
import {toast} from 'react-toastify';

class UserProfilePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profile:null,
            isLoad: false
        }
    }

    componentDidMount(){
        UserProfile(this.props.user.id)
                .then(res=>{
                    console.log(res.data)
                    this.setState({profile: res.data, isLoad:true})
                }).catch(err=>console.log(err.message))
        this.setState({isLoad: false})
    }
    onSubmitCallback = (values)=>{
        console.log(values)
        this.setState({isLoad: false})
        UserProfileUpdateApi(values.profile, this.props.user.id)
            .then(res=>{
                this.setState({profile: res.data, isLoad: true})
                toast.success("Successfully Updated")
                
            })
            .catch(err=>console.log(err))
                           

    }

    render(){
        if(this.state.isLoad){
            return(
                <UserProfileContent 
                profile={this.state.profile}
                onSubmitCallback={this.onSubmitCallback}
                />
            )
        }
        else{
            return(
                <PageSpinner />
            )
        }
        
    }
}

function mapStateToProps(state){
    return{
        user : state.user.user
    }
}

UserProfilePage = connect(mapStateToProps, null)(UserProfilePage)
export {UserProfilePage}