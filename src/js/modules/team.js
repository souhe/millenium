import api from '../api/api';
import keymirror from 'keymirror';

const ActionTypes = keymirror({
        FETCH_TEAM: null,
        FETCH_TEAM_SUCCESS: null,
        FETCH_TEAM_FAIL: null
});

const initialState = {
    photo: '',
    description: '',
    name: '',
    cadre: [],
    error: '',
    newsFeed: ''
}

export default function reducer(state = initialState, action = {}){
    switch (action.type){
        case ActionTypes.FETCH_TEAM_SUCCESS:
            return {
                ...state,
                ...action.result
            };       
        default:
            return state;
    }
}

export function fetchTeam(teamName){
    return {
        types: [ActionTypes.FETCH_TEAM, ActionTypes.FETCH_TEAM_SUCCESS, ActionTypes.FETCH_TEAM_FAIL],
        promise: () => api.get(`data/teams/${teamName}.json`)
    }
}