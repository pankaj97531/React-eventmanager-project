import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import testReducer from "../app/Testcomponent/testReducer";
import eventReducer from "../feature/event/eventReducer";
import modalReducer from "../app/modal/modalReducer";
import authReducer from "../app/auth/authReducer";

const rootReducer = combineReducers({
    form : formReducer,
    test : testReducer,
    events : eventReducer,
    modals : modalReducer,
    auth : authReducer
})

export default rootReducer;