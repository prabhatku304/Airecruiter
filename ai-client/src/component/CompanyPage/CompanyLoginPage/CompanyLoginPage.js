import React from 'react';
import { CompanyLoginContent } from './CompanyLoginContent';
import { CompanyLoginApi } from '../../_Api/User';
import { UserAuth } from '../../../redux/actionCreater/user';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { setToken } from '../../service/setToken';
class CompanyLoginPages extends React.Component{


    constructor(props){
        super(props)
    }

    onSubmitCallback = (value)=>{
        CompanyLoginApi(value)
            .then(res=>{
                this.props.companyUser(res.data)
                setToken(res.data.token)
                localStorage.setItem('jwtToken', res.data.token);
                this.props.history.push('/')

            })
            .catch(err=>console.log(err.errors))
    }
    render(){
        return(
            <CompanyLoginContent 
            onSubmitCallback={this.onSubmitCallback}
            />
        )
    }
}

function mapStateToDispatch(dispatch){
    return{
        companyUser: (data)=> dispatch(UserAuth(data))

    }
}

CompanyLoginPages = connect(null, mapStateToDispatch)(CompanyLoginPages)
const CompanyLoginPage = withRouter(CompanyLoginPages)
export {CompanyLoginPage}