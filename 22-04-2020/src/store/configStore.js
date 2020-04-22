import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducer/rootReducer"
import thunk from "redux-thunk";


export const configStore=()=>{
    const middleWare = [thunk];
    const composeDevTool = composeWithDevTools(applyMiddleware(...middleWare));
    const store= createStore(rootReducer,composeDevTool)
    return store
}

