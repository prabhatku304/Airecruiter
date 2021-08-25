import axios from 'axios'

const setToken = (token)=>{
    if(token){
            axios.defaults.headers.common['Autherization'] = `Bearer ${token}`
    }else{
        delete axios.defaults.headers.common['Autherization'];
    }
}
export {setToken}