import Axios from 'axios';

const initialState = {
    is_admin: '',
    email: '',
    name: '',
    user_id: null
}

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const DELETE_USER = 'DELETE_USER';

export function registerUser(newUser) {
    return {
       type: REGISTER_USER,
       payload: Axios.post('/auth/register', newUser)
    }
 }

export function loginUser(user) {
    return {
       type: LOGIN_USER,
       payload: Axios.post('/auth/login', user)
    }
 }

export function logoutUser() {
    Axios.post('/auth/logout')
 
    return {
       type: LOGOUT_USER
    }
 }

export function deleteUser(){
   Axios.delete('/auth/delete')

   return {
      type: DELETE_USER
   }
}

export default function reducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        case `${LOGIN_USER}_FULFILLED`:
            return{
                ...state,
                is_admin: payload.data.is_admin,
                email: payload.data.email,
                name: payload.data.name,
                user_id: payload.data.user_id
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                is_admin: payload.data.is_admin,
                email: payload.data.email,
                name: payload.data.name,
                user_id: payload.data.user_id
            };
        case LOGOUT_USER:
            return {
                userId: null,
                name: '',
                email: '',
                is_admin: ''
            };
        case DELETE_USER:
            return {
                userId: null,
                name: '',
                email: '',
                is_admin: ''
            }
        default: return state;
    }
}