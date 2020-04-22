import createReducer from "../../common/reducerUtil/createReducer"
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from "./eventConstant"

const initialState = [];

const createEvent=(state,payload)=>{
    return [...state,payload.event]
}  

const updateEvent=(state,payload)=>{
    return [...state.filter((event)=>event.id!==payload.event.id),payload.event]
}

const deleteEvent=(state,payload)=>{
    return [...state.filter((event)=>event.id!==payload.eventId)]
}

const fetchEvent=(state,payload)=>{
 // console.log("fetchevent");
  return payload.events
}

export  default createReducer(initialState,{
    [CREATE_EVENT] : createEvent,
    [UPDATE_EVENT] : updateEvent,
    [DELETE_EVENT] : deleteEvent,
    [FETCH_EVENT] : fetchEvent
})