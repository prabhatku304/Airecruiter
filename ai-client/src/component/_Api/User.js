import axios from 'axios';

const url = 'http://localhost:5000/api'
export const UploadResume = (file,id)=>{
        return axios.post(`http://localhost:5000/api/user/${id}/resume`, file)
}

export const UserRegister = (data)=>{
       return axios.post('http://localhost:5000/api/user/register', data)
}

export const UserLogin = (data)=>{
    return axios.post('/api/user/login', data)
}

export const UploadVideo = (data,id)=>{
    return axios.post(`http://localhost:5000/api/user/${id}/video`, data)
}
export const UploadAudio = (data,id)=>{
    return axios.post(`http://localhost:5000/api/user/${id}/audio`, data)
}


export const UserProfile = (id)=>{
    return axios.get(`/api/user/${id}/profile`)
}

export const UserProfileUpdateApi = (data, id)=>{
    return axios.put(`/api/user/${id}/profile`, data)
}
export const CompanyRegisterApi = (data)=>{
    return axios.post(`${url}/company/register`, data)
}
export const CompanyLoginApi = (data)=>{
    return axios.post(`${url}/company/login`, data)
}

export const UserRegisterdApi = (id)=>{
    return axios.get(`/api/user/${id}/registered`)
}
export const UserStatusTestApi = (user_id, c_id)=>{

    return axios.get(`/api/user/${user_id}/test/${c_id}/status`)
}

export const UserSubmitTestApi = (id, score)=>{
    return axios.post('/api/user/test/score',{id, score})
}

export const UserInterviewMailApi = (id, c_id)=>{
    return axios.post('/api/user/interview-link', {id, c_id})
}

export const UserDataApi = (id)=>{
    return axios.get(`/api/user/${id}`)
}