import React,{useState} from 'react';
import {connect} from 'react-redux'

class CompanyRegisterContent extends React.Component {

    constructor(props){
        super(props)
        this.state={
            username: "",
            email:'',
            password:"",
            company_name: "",
            url:"",
            description:""
           
        }
    }
    
   

    handleSubmit = (e)=>{
        e.preventDefault()
        
        this.props.onSubmitCallback(this.state)
            
    }
   
    render(){
        let errors = {}
    return(
        <div>
           <div className="row p-0">
                 <div className="col-lg-7 col-sm-12 text-center">
                    <div className="title">
                        
                        <div className="img-register">
                        
                            <img className="img-fluid" src="/image/c-register.jpg" alt="" />
                            <h3 > Welcome to Our Company Register Portal</h3>
                        </div>
                    </div>

                </div>
                <div className="col-lg-5 col-sm-12 p-5 container">
                    <div className="container w-75" >
                        <div className="text-center">
                            <h2 style={{color:'blue'}}>Company Register</h2>
                        </div>
                        {/* <div className="container"> */}
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>UserName</label>
                                    <input 
                                     type="text"
                                     name="username"
                                     value={this.state.username}
                                     onChange={(e)=> {
                                         this.setState({username:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="username"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input 
                                     type="email"
                                     name="email"
                                     value={this.state.email}
                                     onChange={(e)=> {
                                         this.setState({email:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="email"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                     type="password"
                                     name="password"
                                     value={this.state.password}
                                     onChange={(e)=> {
                                         this.setState({password:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="password"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <label>Company Name:</label>
                                    <input 
                                     type="text"
                                     name="company_name"
                                     value={this.state.company_name}
                                     onChange={(e)=> {
                                         this.setState({company_name:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="company"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <label>Image Url</label>
                                    <input 
                                     type="text"
                                     name="url"
                                     value={this.state.url}
                                     onChange={(e)=> {
                                         this.setState({url:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="Image Url"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                     type="text"
                                     name="description"
                                     value={this.state.description}
                                     onChange={(e)=> {
                                         this.setState({description:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="Description"
                                     row={3}
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                             

                                <div className="update-btn">
                                    <button className="btn" type="submit">Register</button>
                                </div>
                            </form>
                        {/* </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
    }
}

export {CompanyRegisterContent}