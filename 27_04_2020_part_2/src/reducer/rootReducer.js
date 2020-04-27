import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'
import testReducer from "../app/Testcomponent/testReducer";
import eventReducer from "../feature/event/eventReducer";
import modalReducer from "../app/modal/modalReducer";
import authReducer from "../app/auth/authReducer";
import asyncReducer from "../feature/asynchandle/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    form : formReducer,
    test : testReducer,
    events : eventReducer,
    modals : modalReducer,
    auth : authReducer,
    async : asyncReducer,
    toastr: toastrReducer
})

export default rootReducer;