
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { userInfo } from './userInfo';
import App from './App';
import Login from './components/Login/Login';
import chat from './reducers';


const store = createStore(
    chat
);

/* setInterval(e=>{console.log(store.getState())}, 10000); */


const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (

        userInfo() ? (
            <Component {...props} />
        )  : (
            <Redirect to={{ 
                pathname: "/",
                state: { from: props.location } }}/> 
        )

    )} />

);

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => 
            <Login /> 
            } />
            <PrivateRoute path="/chat" component = {()=> 
            <Provider store={store}>
            <App />
            </Provider>
        }/>
        </Switch>
    </BrowserRouter>

);

export default Routes;