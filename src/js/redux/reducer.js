import { combineReducers } from 'redux';
import info from '../modules/info';
import team from '../modules/team';
import links from '../modules/links';

export default combineReducers({info, team, links});
