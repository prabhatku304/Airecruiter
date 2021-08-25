import {combineReducers} from 'redux'
import {UserReducer} from './user'
import { UserTest } from './userTest'

const reducer = combineReducers({
            user : UserReducer,
            test: UserTest
})

export default reducer