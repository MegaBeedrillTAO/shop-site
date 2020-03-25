import Axios from 'axios';

const initialState = {
    is_admin: ''
}

export default function reducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        default: return state;
    }
}