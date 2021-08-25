import React from 'react';
import { UserLogout } from '../../redux/actionCreater/user';
import {connect} from 'react-redux';

const NavBars = (props)=>{

    const Logout = ()=>{
            localStorage.clear()
            props.logout()
            window.location.replace('/')
    }
    console.log(props.user.isAuthenticated)
    return(
        <nav>
            <div className='content'>
            <div className="p-2" style={{backgroundColor:'white'}}><a href="/">
                <img style={{height:40, width:300}} src="./image/logo.png" alt="" className="" />
                </a></div>
                {props.user.isAuthenticated ? (
                    <div className="text-center nav-content">
                        {props.user.user.is_admin ? (
                                 <div className="flex ">
                                 <div className=""><a href="/company/upload/question">Upload Question</a></div>
                                 <div className="ml-5"><a href="/company">Company</a></div>
                                 <div className="ml-5"><a href="/company/leaderboard">Candidate</a></div>
                                 
     
                             </div>
                        ):(
                        <div className="flex ">
                            <div className="" ><a href="/profile">profile</a></div>
                            <div className="ml-5"><a href="/company">Company</a></div>
                            <div className="ml-5"><a href="/user/dashboard">Dashboard</a></div>
                            <div className="ml-5"><a href="/register">Resume</a></div>

                        </div>
                        )}
                       
                    <div className="ml-5"><a href="#" onClick={Logout} >Logout</a></div>
                    </div>
            ): (<>
               
                <div className="drop">
                <div className="company">
                    <div className="drop-down">
                        <button className=" drop-btn" >Company</button>
                        <div className="dropdown-content">
                            <a href="/company/register">Register</a>
                            <a href="/company/Login">Login</a>
                        </div>
                    </div>
                </div>
                <div className="user">
                    <div className="drop-down">
                        <button className=" drop-btn" >Candidate</button>
                        <div className="dropdown-content">
                            <a href="/register">Register</a>
                            <a href="/Login">Login</a>
                        </div>
                    </div>
                </div>
                </div>
                </>)}
                
               
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        user: state.user,
        
    }
}

function mapStateToDispatch(dispatch){
    return{
        logout: ()=> dispatch(UserLogout)
    }
}
const NavBar = connect(mapStateToProps, mapStateToDispatch)(NavBars)
export {NavBar}