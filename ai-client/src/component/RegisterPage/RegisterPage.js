import React from 'react';
import { RegisterForm } from './RegisterForm';
import {connect} from 'react-redux';
import { UserAuth } from '../../redux/actionCreater/user';
import { UserRegister } from '../_Api/User';
import { setToken } from '../service/setToken';


class RegisterPage extends React.Component{
     onSubmitCallback = (value)=>{
         console.log(value)
         UserRegister(value)
            .then((res)=>{
                console.log(res.data)
                setToken(res.data.token)
                localStorage.setItem('jwtToken', res.data.token)
                this.props.userAdd(res.data)
                console.log(res.data.token)
            }).catch(err=>console.log(err))
         
     }
    render(){
        console.log(this.props.user)
        return(
            <RegisterForm
            onSubmitCallback = {this.onSubmitCallback}
            user={this.props.user}
            isAuthenticated={this.props.isAuthenticated}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        isAuthenticated: state.user.isAuthenticated,
        user: state.user.user
    }
}

function mapStateToDispatch(dispatch){
    return{
        userAdd: (data)=> dispatch(UserAuth(data))
    }
}
RegisterPage = connect(mapStateToProps, mapStateToDispatch)(RegisterPage)

export {RegisterPage}