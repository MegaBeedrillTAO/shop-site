import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware'
import infoReducer from './Reducers/infoReducer';
import authReducer from './Reducers/authReducer';

const rootReducer = combineReducers({
    infoReducer,
    authReducer
})


export default createStore(rootReducer, applyMiddleware(promise));