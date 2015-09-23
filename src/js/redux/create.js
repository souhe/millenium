import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import clientMiddleware from './clientMiddleware';
import reducer from './reducer';

export default function createApiClientStore(){
    const middleware = clientMiddleware();
    var finalCreateStore = applyMiddleware(middleware)(createStore);

    const store = finalCreateStore(reducer);

    return store;
}
