import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// importing the reducer and rename formReducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    stream: streamReducer
})