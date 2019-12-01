import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom'
import Home from "./components/home";
import LoginPage from './components/login'
import signUp from './components/signUp'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);


export default function App() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/home" component={Home} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={signUp} />
            </Switch>
        </Router>
    )
}

