import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createRoutes from './createRoutes.jsx';
import { Provider } from 'react-redux';
import createStore from './redux/create'
import history from './history'


const store = createStore();
const routes = createRoutes(store);

const component = (
    <Provider store={store} key="provider">
        <Router history={history} children={routes}/>
    </Provider>
);

ReactDOM.render(component, document.getElementById("main"));
