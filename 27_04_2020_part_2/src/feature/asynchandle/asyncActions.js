import { ASYNC_HANDLE_START, ASYNC_HANDLE_FINISH, ASYNC_HANDLE_ERROR } from "./asyncConstant"

export const asyncActionStart=(payload)=>{
    return{
        type : ASYNC_HANDLE_START,
        payload : payload
    }
}

export const asyncActionFinish=(payload)=>{
    return{
        type : ASYNC_HANDLE_FINISH,
        payload : payload
    }
}

export const asyncActionError=(payload)=>{
    return{
        type : ASYNC_HANDLE_ERROR,
        payload : payload
    }
}