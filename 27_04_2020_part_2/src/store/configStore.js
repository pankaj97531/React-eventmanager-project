import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase';
import { reduxFirestore,getFirestore } from 'redux-firestore';
import rootReducer from "../reducer/rootReducer"
import thunk from "redux-thunk";
import firebase from '../app/config/firebase';

const rrfConfig={
	userProfile : "users",
	attachAuthIsReady : true,
	useFirestoreForProfile : true
}

export const configStore=()=>{
    const middleWare = [thunk.withExtraArgument({getFirebase,getFirestore})];
    const composeDevTool = composeWithDevTools(applyMiddleware(...middleWare),reactReduxFirebase(firebase,rrfConfig),reduxFirestore(firebase));
    const store= createStore(rootReducer,composeDevTool)
    return store
}

