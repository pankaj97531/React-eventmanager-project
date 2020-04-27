import createReducer from "../../common/reducerUtil/createReducer"
import { LOGIN_USER } from "./authConstant"

const initialState={
    authenticated : false,
    currentUser : null
}
const loginUser=(state, payload) => {
    return {
        ...state,
        authenticated: true,
        currentUser: payload.cred.email
    }
}

export default createReducer(initialState,{
    [LOGIN_USER] : loginUser
})