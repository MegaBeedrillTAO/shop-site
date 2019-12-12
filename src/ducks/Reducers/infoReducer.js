import Axios from 'axios';

const initialState = {
    announcments: '',
    menu_img: '',
    specials: []
}

export default function reducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        default: return state;
    }
}