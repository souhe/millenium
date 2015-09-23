import api from '../api/api';
import keymirror from 'keymirror';

const ActionTypes = keymirror({
        FETCH_INFO: null,
        FETCH_INFO_SUCCESS: null,
        FETCH_INFO_FAIL: null
});

const initialState = {
    photo: '',
    description: '',
    title: '',
    cadre: [],
    error: ''
}

export default function reducer(state = initialState, action = {}){
    switch (action.type){
        case ActionTypes.FETCH_INFO_SUCCESS:
            return {
                ...state,
                ...action.result
            };       
        default:
            return state;
    }
}

export function fetchInfo(){
    return {
        types: [ActionTypes.FETCH_INFO, ActionTypes.FETCH_INFO_SUCCESS, ActionTypes.FETCH_INFO_FAIL],
        promise: () => api.get('data/info.json')
    }
}