import React from 'react';
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import reducers from './reducers'



import Main from './components/Main'
import PageNotFound from './components/PageNotFound'
import Login from './containers/Login'
import Users from './components/users'
import App from './containers/App'
import Home from './containers/Home'
import Signup from './containers/Signup'
import Singleuser from './containers/Singleuser/Singleroter'
import UserView from './containers/UsersViiews/UserView'
import UpdateUser from './containers/Singleuser/updateUser'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as AllActions from './actions'
import observe from './observe'
 


 

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducers, applyMiddleware(...middleware))
const history = syncHistoryWithStore(browserHistory, store)
 
const requireCredentials = (nextState, replace, next) => {
    if (Meteor.userId()) {
        store.dispatch(AllActions.get_loggedin_user());
        next()
    } else {
        replace('/login')
        
       next()
    }
}

  

store.dispatch(AllActions.load_users_posts());
//observe.init(store)


 export const renderRoutes = () => (
    <Provider store={store}>
     <Router history={history}>
        
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/users" component={Users}/>
        <Route path="/users/:id" component={UserView}/>
        <Route path="/updateuser" component={UpdateUser}/>
            <Route path="/" component={App} onEnter={requireCredentials}>
            <IndexRoute component={Main}/>
            </Route>
        <Route path="*" component={PageNotFound}/>
     </Router>
   </Provider>
  );
   