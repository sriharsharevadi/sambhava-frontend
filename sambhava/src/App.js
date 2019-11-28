import React, { Component } from 'react';
import './App.css';
import {  BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import signIn from './components/signIn'
import signUp from './components/signUp'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={signIn} />
                <Route path="/signup" component={signUp} />
            </Switch>
        </Router>
    )
}

