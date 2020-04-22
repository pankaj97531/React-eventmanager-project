import createReducer from "../../common/reducerUtil/createReducer"
import { LOGIN_USER, SIGN_OUT_USER } from "./authConstant"

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
const logoutUser= (state) => {
    return {
        ...state,
        authenticated: false,
        currentUser: {}
    }
}

export default createReducer(initialState,{
    [LOGIN_USER] : loginUser,
    [SIGN_OUT_USER] : logoutUser
})