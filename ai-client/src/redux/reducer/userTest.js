const { USER_TEST } = require("../action")

const DEFAULT_STATE ={
   test:{},
}

const UserTest = (state=DEFAULT_STATE, action)=>{

    switch(action.type){

        case USER_TEST:
            return{
                ...state,
                test: action.data
            }

        default: return{
            ...state
        }
    }
}

export {UserTest}