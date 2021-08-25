import axios from 'axios';




export const CompanyQuestionUploadApi = (data, id)=>{

    return axios.post(`/api/company/${id}/question/upload`, data)
}

export const CompanyApi = ()=>{
    return axios.get('/api/company')
}
export const UserCompanyTestApi = (id,c_id)=>{
    return axios.post(`/api/company/${id}/add`, {c_id});
}

export const UserCompanyAppliedList = (c_id)=>{
        return axios.get(`/api/company/user/applied-list/${c_id}`)
}

export const CandidateSelectionStatusApi = (status, c_id, user_id)=>{
    return axios.post('/api/company/candidate/selection',{status, c_id, user_id})
}