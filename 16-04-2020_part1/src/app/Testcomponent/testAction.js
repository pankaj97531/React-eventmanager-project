import { INCREMENT_COUNT, DECREMENT_COUNT } from "./testConstant"

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