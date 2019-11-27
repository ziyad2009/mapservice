// /* eslint-env browser */

// import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import ReactDOM  from 'react-dom';
// //import {Router,Route,IndexRoute,browserHistory, Link} from 'react-router'
// import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import { createBrowserHistory } from 'history'
// import 'material-design-lite/material.min.js'
// import './App.css'
// //import App from '../imports/ui/App.jsx';
// import App from '../client/containers/App';
// import Login from './containers/Login';
// import Signup from './containers/Signup'
// import Header from './components/Header'

// const history = createBrowserHistory();
// const routes=(
//   <Router>
//   <div>
//      <Switch>
//      <Route  path="/" component={App} />
//     <Route  exact path="login" component={Login}/>
//    </Switch>
//     </div>
   
//   </Router>
// )
// Meteor.startup(() => {
//   ReactDOM.render(routes, document.querySelector('.render-target'));
// });

import React from 'react'
import '../imports/startup/client'
import {render} from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import "normalize.css/normalize.css"
import 'material-design-lite/material.min.js'
import './App.css'
 
import {renderRoutes} from './routes'
const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('root'));
    // ReactDOM.render(renderRoutes, document.querySelector('.render-target'));

}); 