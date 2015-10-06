import api from '../api/api';
import keymirror from 'keymirror';

var ActionTypes = keymirror({
    FETCH_LINKS: null,
    FETCH_LINKS_SUCCESS: null,
    FETCH_LINKS_FAILED: null
});

export default function reducer(state = [], action = {}){
    switch(action.type){
        case ActionTypes.FETCH_LINKS_SUCCESS:
            return action.result;
        default:
            return state;
    }
}

export function fetchLinks(){
    return{
        types: [ActionTypes.FETCH_LINKS, ActionTypes.FETCH_LINKS_SUCCESS, ActionTypes.FETCH_LINKS_FAILED],
        promise: () => api.get('data/links.json')
    };
}
