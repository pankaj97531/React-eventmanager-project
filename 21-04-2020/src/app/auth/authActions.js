import { LOGIN_USER, SIGN_OUT_USER } from "./authConstant"

export const loginAction=(cred)=>{
   // console.log(cred);
    return{
        type : LOGIN_USER,
        payload : {
            cred
        }
    }
}

export const logoutAction=()=>{
    return{
        type: SIGN_OUT_USER
    }
}