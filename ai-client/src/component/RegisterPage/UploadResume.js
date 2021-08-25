import React from 'react';
import { UploadResume } from '../_Api/User';
import { history } from '../_Api/location/location';
import {withRouter} from 'react-router-dom'

const UploadResumePage = (props)=>{
  
    const [file, setFile] = React.useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = new FormData()
        data.append('file', file)
        UploadResume(data, props.user.id)
            .then(res=>{
                 props.history.push('/profile')
            })
            .catch(err=>console.log(err))
    }
    const handleChange = (e)=>{
        setFile(e.target.files[0])

      
    }
    return(
        <div className='text-center p-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="p-0 upload-image"> 
                            <img src='./image/upload.jpg' alt="" className="img-fluid" style={{height:'80vh'}} />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 p-5 mt-5">
                        <div className='text-slide'>
                            <h2>Upload Resume</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-5 mt-4 border_ " >
                            <div className="form-group">
                                <input
                                 name='file'
                                 type='file'
                                 onChange = {handleChange}
                                 placeholder="resume"
                                 className="form-control"
                                />
                            </div>
                            <div>
                                <button className='btn btn-primary'>Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(UploadResumePage)