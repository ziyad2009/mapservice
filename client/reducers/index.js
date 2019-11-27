import {combineReducers} from 'redux';
import posts from './posts';
import user from './user';
import{routerReducer} from 'react-router-redux'
export default combineReducers({
posts: posts,
 user: user,
 routing: routerReducer
});