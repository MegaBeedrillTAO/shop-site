import Axios from 'axios';

const initialState = {

}

export default function reducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        default: return state;
    }
}