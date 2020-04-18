import { INCREMENT_COUNT,DECREMENT_COUNT } from './testConstant';
import createReducer from '../../common/reducerUtil/createReducer';
const initialState={
    data : 21
}

const incrementCounter=(state)=>{
    return {...state,data: state.data+1}
}

const decrementCounter=(state)=>{
    return {...state,data: state.data-1}
}


// const testReducer=(state = initialState,action)=>{
//   //  console.log(action);
//     switch(action.type){
//         case INCREMENT_COUNT : 
//         return {...state,data: state.data+1}
//         case DECREMENT_COUNT : 
//         return {...state,data: state.data-1}
//         default :
//         return state
//     }
// }

export default createReducer(initialState,{
    [INCREMENT_COUNT] : incrementCounter,
    [DECREMENT_COUNT] : decrementCounter
})