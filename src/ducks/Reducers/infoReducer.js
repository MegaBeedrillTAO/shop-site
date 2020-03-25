import Axios from 'axios';

const initialState = {
    announcments: '',
    menu_img: '',
    specials: []
}

const GET_INFO = 'GET_INFO'

export function get_info(){
    return{
        type: GET_INFO,
        payload: Axios.get('/api/info')
    }
}

export default function reducer(state = initialState, action){
    const {payload, type} = action;
    switch(type){
        case `${GET_INFO}_FULFILLED`: 
        return{
            announcments: payload.data.announcments,
            menu_img: payload.data.menu_img,
            specials: [...payload.data.specials]
        };
        default: return state;
    }
}