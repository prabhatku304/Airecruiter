import React from 'react';
import { PageSpinner } from './PageSpinner';


class UserProfileContent extends React.Component{

      constructor(props){
          super(props)
          this.state={
              profile: {
                    name:'',
                    college: '',
                    contact:'',
                    skills:'',
                    experience: '',
                    languages:'',
                    email:''
              },
              isLoad: false
          }
      }

     
      componentWillMount(){
          console.log(this.props.profile)
          this.setState({
              profile: this.props.profile,
              isLoad: true
          })
      }

      handleSubmit = (e)=>{
            e.preventDefault();

            this.props.onSubmitCallback(this.state)
      }

      render(){
          let {profile} = this.state
          let profile2 =this.props.profile
        
       
          return(
              <div className="p-5 mt-5">
                  <div className='container'>
                      <div className='row'>
                          <div className="col-lg-3 col-md-12">
                              <div className="card">
                                  <div className="card-body">
                                      <div className="o-hidden p-2">
                                        <img style={{height:200, width:200}} src="https://cdna.artstation.com/p/assets/images/images/023/576/078/original/ying-chen-me-optimize.gif?1579652163" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-9 col-md-12 '>
                              <div className="container card">
                                  <div className="card-body">
                                  <div className=" card-body">
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <p>Name</p>
                                              <h5 className="profile-text">{profile2.name}</h5>
                                          </div>
                                          <div className='col-md-6'>
                                              <p>College</p>
                                              <h5 className="profile-text">{profile2.college || ''}</h5>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <p>Contact</p>
                                              <h5 className="profile-text">9668640141</h5>
                                          </div>
                                          <div className='col-md-6'>
                                              <p>Email</p>
                                              <h5 className="profile-text">{profile2.email}</h5>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className="col">
                                          <p>skills</p>
                                          <h6 className="profile-text">{profile2.skills}</h6>
                                          </div>
                                       
                                      </div>
                                      <div className='row'>
                                          <div className="col">
                                          <p>experience</p>
                                          <p className="profile-text">{profile2.experience}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <hr />
                                  <div className="">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Full Name</label>
                                                        <input
                                                        value={profile.name}
                                                        name="name"
                                                        onChange={(e)=>
                                                           { let name = e.target.value
                                                            this.setState((prev)=>({
                                                                ...prev,
                                                                profile:{
                                                                    ...prev.profile,
                                                                    name: name
                                                                }

                                                            }))}}
                                                        placeholder="name"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                        value={profile.email}
                                                        name="email"
                                                        onChange={(e)=>
                                                            { let email= e.target.value
                                                                this.setState((prev)=>({
                                                                    ...prev,
                                                                    profile:{
                                                                        ...prev.profile,
                                                                        email
                                                                    }
    
                                                                }))}}
                                                        placeholder="email"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Contact</label>
                                                        <input
                                                        value={this.state.contact}
                                                        name="contact"
                                                        onChange={(e)=>
                                                            { let contact = e.target.value
                                                                this.setState((prev)=>({
                                                                    ...prev,
                                                                    profile:{
                                                                        ...prev.profile,
                                                                        contact
                                                                    }
    
                                                                }))}}
                                                        placeholder="contact"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>College</label>
                                                        <input
                                                        value={profile.college}
                                                        name="college"
                                                        onChange={(e)=>
                                                            { let college = e.target.value
                                                                this.setState((prev)=>({
                                                                    ...prev,
                                                                    profile:{
                                                                        ...prev.profile,
                                                                        college
                                                                    }
    
                                                                }))}}
                                                        placeholder="college"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                               <div className="col">
                                                    <div className="form-group">
                                                        <label>Skills</label>
                                                        <textarea
                                                        value={profile.skills}
                                                        name="skills"
                                                        onChange={(e)=>
                                                            { let skills = e.target.value
                                                                this.setState((prev)=>({
                                                                    ...prev,
                                                                    profile:{
                                                                        ...prev.profile,
                                                                        skills
                                                                    }
    
                                                                }))}}
                                                        placeholder="Skills"
                                                        className="form-control"
                                                        cols={100}
                                                        rows={10}
                                                        />
                                                    </div>
                                                    </div>

                                            </div>
                                            <div className="row">
                                                <div className="col">
                                               
                                                    <div className="form-group">
                                                        <label>experience</label>
                                                        <textarea
                                                        value={profile.experience}
                                                        name="experience"
                                                        onChange={(e)=>
                                                            { let experience = e.target.value
                                                                this.setState((prev)=>({
                                                                    ...prev,
                                                                    profile:{
                                                                        ...prev.profile,
                                                                       experience
                                                                    }
    
                                                                }))}}
                                                        placeholder="experience"
                                                        className="form-control"
                                                        cols={100}
                                                        rows={10}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row update-btn">
                                                <button className="btn ">Update</button>
                                            </div>
                                        </form>
                                  </div>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )
          
      }
}


export {UserProfileContent}