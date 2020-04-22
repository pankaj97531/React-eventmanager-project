import { LOGIN_USER, SIGN_OUT_USER } from "./authConstant"
import { closeModal } from "../modal/modalAction"


export const loginAction=(cred)=>{
   // console.log(cred);
   return dispatchEvent=>{
       dispatchEvent({
        type : LOGIN_USER,
        payload : {
            cred
        }
    })
    dispatchEvent(closeModal())
   }
    
}

export const logoutAction=()=>{
    return{
        type: SIGN_OUT_USER
    }
}