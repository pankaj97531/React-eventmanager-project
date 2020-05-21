import createReducer from "../../common/reducerUtil/createReducer"
import { ASYNC_HANDLE_START, ASYNC_HANDLE_FINISH, ASYNC_HANDLE_ERROR } from "./asyncConstant"

const initialState = {
    loading : false,
    eventname : null
}
const asyncStart=(state,payload)=>{
    return {
        ...state,
        loading : true,
        eventname : payload
    }
}
const asyncFinish=(state,payload)=>{
    return {
        ...state,
        loading : false,
        eventname : null
    }
}
const asyncError=(state,payload)=>{
    return {
        ...state,
        loading : true,
        eventname : null
    }
}

export default createReducer(initialState,{
    [ASYNC_HANDLE_START] : asyncStart,
    [ASYNC_HANDLE_FINISH] : asyncFinish,
    [ASYNC_HANDLE_ERROR] : asyncError
})