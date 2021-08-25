import React from 'react';

import {connect} from 'react-redux';
import {CompanyRegisterContent} from './CompanyRegisterContent'
import { UserAuth } from '../../../redux/actionCreater/user';
import { CompanyRegisterApi } from '../../_Api/User';
import {withRouter} from 'react-router-dom'
import { setToken } from '../../service/setToken';



class RegisterPage extends React.Component{
     onSubmitCallback = (value)=>{
         console.log(value)

         CompanyRegisterApi(value)
            .then(res=>{
                this.props.userAdd(res.data)
                setToken(res.data.token)
                localStorage.setItem('jwtToken', res.data.token)
                this.props.history.push('/')
            })
            .catch(err=>{
                let data = err
                console.log(data)
                
            })
       
         
     }
    render(){
        console.log(this.props.user)
        return(
            <CompanyRegisterContent 
            onSubmitCallback={this.onSubmitCallback}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapStateToDispatch(dispatch){
    return{
        userAdd: (data)=> dispatch(UserAuth(data))
    }
}
const CompanyRegisterPages = connect(mapStateToProps, mapStateToDispatch)(RegisterPage)
const CompanyRegisterPage = withRouter(CompanyRegisterPages)
export {CompanyRegisterPage}