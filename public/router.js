import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute, Router,hashHistory } from 'react-router';
import Article from './components/Article/Article';
import Login from './components/Login/Login';
import Message from './components/Message/Message';
import UserPage from './components/UserPage/UserPage';
import HomePage from './components/HomePage/HomePage';
import Publish from './components/Publish/Publish';
import App from './containers/App';
import prefix from './utils/routePrefix';
import { Provider } from 'react-redux';
import store from './store';
import './assets/css/index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';//touch事件
injectTapEventPlugin();
render((
<Provider store={store}>
    <Router  history={hashHistory}>
        <Route path={`${prefix}/`} component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='/Article/:id' component={Article}/>
        <Route path='/HomePage' component={HomePage}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Message' component={Message}/>
        <Route path='/UserPage' component={UserPage}/>
        <Route path='/Publish' component={Publish}/>
        </Route>
    </Router>
</Provider>
    ),document.getElementById('app'));
