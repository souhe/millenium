import React from 'react';
import {Route, Redirect} from 'react-router';
import history from './history';

import Home from './components/Home';
import App from './components/App';
import Team from './components/Team';

export default store => (
    <Route component={App} >
        <Redirect from="/" to="/about" />
        <Route path="/about" component={Home} onEnter={createFetchDataHook(store)} />
        <Route path="/team/:teamName" component={Team} onEnter={createFetchDataHook(store, history)} />
    </Route>
);

function combineHooks(hooks){
    return (nextState, redirectTo, callback) => {
        var promises = [];
        for(let hook of hooks){
            promises.push(new Promise((resolve) => {hook(nextState, redirectTo, resolve)}))
        }

        Promise.all(promises).then(() => {
            callback();
        });
    }
}

function getFetchData(component = {}) {
  return component.WrappedComponent ?
    getFetchData(component.WrappedComponent) :
    component.fetchData;
};

export default function createFetchDataHook(store){
    return (nextState, redirectTo, callback) => {
        var stateLocation = nextState.location.state && nextState.location.state.location ?  nextState.location.state.location.pathname : nextState.location.state;
        console.log('TRANSITION HOOK START!', `${stateLocation} => ${nextState.location.pathname}`, nextState);

        const { params, location: { query } } = nextState;
        const promises = nextState.routes
            .map(route => route.component)
            .filter((component) => getFetchData(component))
            .map(getFetchData)
            .map(fetchData => fetchData(store, params, query || {}));

        callback();
    };
}
