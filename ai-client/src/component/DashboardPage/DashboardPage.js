import React from 'react';
import { DashboardPageContent } from './DashboardPageContent';
import {connect} from 'react-redux';
import { UserRegisterdApi } from '../_Api/User';
import { PageSpinner } from '../UserProfile/PageSpinner';

class DashboardPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data: null
        }
    }
    componentDidMount(){
        UserRegisterdApi(this.props.user.id)
            .then(res=>{
                console.log(res.data)
                this.setState({data: res.data})
            }).catch(err=>{
                console.log(err)
            })

    }
    componentDidUpdate(){
        if(!this.props.isAuthenticated){
            this.props.history.push('/')
        }
    }
    onStartTest = (id)=>{
        alert(id)
        this.props.history.push(`/user/${id}/test`)
    }
    render(){
        console.log(this.props.isAuthenticated)
        return(
            <div className="p-0 m-0">
                {this.props.isAuthenticated && this.state.data ? (
                         <DashboardPageContent 
                            data={this.state.data}
                            onStartTest = {this.onStartTest}
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
        isAuthenticated: state.user.isAuthenticated,
        user: state.user.user
    }
}
DashboardPage = connect(mapStateToProps, null)(DashboardPage)

export {DashboardPage}