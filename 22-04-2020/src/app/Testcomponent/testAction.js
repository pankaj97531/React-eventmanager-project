import { INCREMENT_COUNT, DECREMENT_COUNT } from "./testConstant"
import { asyncActionStart, asyncActionFinish } from "../../feature/asynchandle/asyncActions"
import { ASYNC_HANDLE_START } from "../../feature/asynchandle/asyncConstant"

export const incrementCount=()=>{
    return{
        type : INCREMENT_COUNT
    }
}
export const decrementCount=()=>{
    return{
        type : DECREMENT_COUNT
    }
}
const delay =(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
} 

export const incrementCountAsync=(name)=>{
    return async dispatchEvent=>{
        dispatchEvent(asyncActionStart(name));
        await delay(1000);
        dispatchEvent(incrementCount());
        dispatchEvent(asyncActionFinish())
    }
}

export const decrementCountAsync=(name)=>{
    return async dispatchEvent=>{
        dispatchEvent({ type : ASYNC_HANDLE_START , payload : name });
        await delay(1000);
        dispatchEvent({type : DECREMENT_COUNT});
        dispatchEvent(asyncActionFinish())
    }
}