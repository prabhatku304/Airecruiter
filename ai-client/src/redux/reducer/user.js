const { USER_LOGIN, USER_LOGOUT } = require("../action")

const DEFAULT_STATE ={
    user:{},
    isAuthenticated: false,

}

const UserReducer =  (state=DEFAULT_STATE, action)=>{

     switch(action.type){
         case USER_LOGIN: 
                return{
                    ...state,
                    user: action.data,
                    isAuthenticated: true
                }
         case USER_LOGOUT:
               return{
                   ...state,
                   user:{},
                   isAuthenticated: false
               }
         default:
              return{
                ... state
         }
     }
}
export {UserReducer}
