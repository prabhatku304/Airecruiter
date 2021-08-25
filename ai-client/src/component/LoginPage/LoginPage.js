import React from 'react';
import { LoginPageContent } from './LoginPageContent';
import { UserLogin } from '../_Api/User';
import { setToken } from '../service/setToken';
import { UserAuth } from '../../redux/actionCreater/user';
import {connect} from 'react-redux'

class LoginPage extends React.Component{

    onSubmitCallback = (value)=>{
        console.log(value)
        UserLogin(value)
            .then(res=>{
                setToken(res.data.token)
                localStorage.setItem('jwtToken', res.data.token)
                this.props.userAdd(res.data)
            })
    }
    componentDidUpdate(){
        console.log(this.props.user.isAuthenticated)
        if(this.props.user.isAuthenticated){
            this.props.history.push('/')
        }
       
    }

    render(){
       
        return(
            <LoginPageContent 
            onSubmitCallback={this.onSubmitCallback}
            />
        )
    }
}

function mapStateToDispatch(dispatch){
    return {
        userAdd: (data)=>dispatch(UserAuth(data))
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}

LoginPage = connect(mapStateToProps, mapStateToDispatch)(LoginPage)
export {LoginPage}